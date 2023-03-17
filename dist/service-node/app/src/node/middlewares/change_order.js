"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeOrder = void 0;
const set_order_1 = require("./set_order");
async function changeOrder(_, { data }, { clients: { decrypClient, market, checkoutExternal, paymentExternal, omsExternal, masterData } }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    try {
        //Desencriptar el email
        let mket = await market.getMarket();
        let account = (mket === null || mket === void 0 ? void 0 : mket.haveParentAccount) ? mket === null || mket === void 0 ? void 0 : mket.parentAccountName : mket === null || mket === void 0 ? void 0 : mket.accountName;
        let email;
        email = await decrypClient.decrypEmail(`?alias=${data.email}`, data.sellerOrder);
        if (email == null) {
            email = await decrypClient.decrypEmail(`?alias=${data.email}`, account);
            if (email == null) {
                const responsePlaceOrder = {};
                responsePlaceOrder.error = {
                    message: 'ERROR No se puede desencriptar el email',
                };
                return responsePlaceOrder;
            }
        }
        if (email === null || email === void 0 ? void 0 : email.email.includes('ct.vtex.com.br')) {
            email = await decrypClient.decrypEmail(`?alias=${email.email}`, mket.parentAccountName);
            if (email == null) {
                const responsePlaceOrder = {};
                responsePlaceOrder.error = {
                    message: 'ERROR No se puede desencriptar el email',
                };
                return responsePlaceOrder;
            }
            else {
                email = await email.email;
            }
        }
        else {
            email = await email.email;
        }
        //GET CLIENT PROFILE
        const responseClient = await checkoutExternal.clientProfile(email, account);
        const userProfileId = (await responseClient).userProfileId;
        if (await userProfileId != null) {
            //Consumir servicio de crear orden Place order
            const responseSetOrder = await set_order_1.setOrder(data, responseClient);
            if (await responseSetOrder.error == null) {
                //SET ORDER
                try {
                    const responsePlaceOrder = await checkoutExternal.setNewOrder(responseSetOrder, account);
                    if (await (responsePlaceOrder === null || responsePlaceOrder === void 0 ? void 0 : responsePlaceOrder.transactionData) != null) {
                        responsePlaceOrder.orders.forEach(async (order) => {
                            var _a, _b;
                            const addressId = (_b = (_a = order === null || order === void 0 ? void 0 : order.shippingData) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.addressId;
                            const orderGroup = order.orderGroup;
                            //Enviar la información de pago
                            responsePlaceOrder.transactionData.merchantTransactions.forEach((merchant) => {
                                const transactionId = merchant.transactionId;
                                const merchantName = merchant.merchantName;
                                merchant.payments.forEach(async (payment) => {
                                    const paymentSystem = payment.paymentSystem;
                                    const value = payment.value;
                                    merchant.payments.forEach(async () => {
                                        const requestCreateTransaction = [
                                            {
                                                paymentSystem: paymentSystem,
                                                value: value,
                                                referenceValue: value,
                                                installments: '1',
                                                fields: {
                                                    addressId: addressId,
                                                },
                                                transaction: {
                                                    id: transactionId,
                                                    merchantName: merchantName,
                                                },
                                                currencyCode: 'COL',
                                            },
                                        ];
                                        await paymentExternal.createTransaction(account, transactionId, requestCreateTransaction);
                                        //SEND to WL 5- AUTHORIZE TRANSACTION
                                        const requestAuthorizeOrder = {
                                            transactionId: transactionId,
                                            prepareForRecurrency: false,
                                        };
                                        await paymentExternal.authorizationTransaction(data.itemsOrder[0].seller, transactionId, requestAuthorizeOrder);
                                        // 6- GATEWAY CALLBACK
                                        const requestCallback = {
                                            orders: [
                                                {
                                                    orderId: orderGroup + '-01',
                                                    orderGroup: orderGroup,
                                                    state: 'order-created',
                                                },
                                            ],
                                        };
                                        await paymentExternal.gatewayCallback(account, orderGroup, requestCallback);
                                        // 7- Cancel Order
                                        await omsExternal.cancelOrder(data.orderId, data.sellerOrder);
                                        // Cancel Marketplace
                                        await omsExternal.cancelOrder(data.marketplaceOrderId, account);
                                        // 8- Delete address
                                        await masterData.deleteAddress(addressId, account);
                                    });
                                });
                            });
                        });
                        responsePlaceOrder.error = { message: 'ORDEN CREADA CORRECTAMENTE' };
                        return responsePlaceOrder;
                    }
                    else {
                        if ((responsePlaceOrder === null || responsePlaceOrder === void 0 ? void 0 : responsePlaceOrder.error) != null) {
                            return responsePlaceOrder;
                        }
                        else {
                            const responsePlaceOrder = {};
                            responsePlaceOrder.error = {};
                            return responsePlaceOrder;
                        }
                    }
                }
                catch (error) {
                    const responsePlaceOrder = {};
                    if (((_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.orderForm) === null || _c === void 0 ? void 0 : _c.messages) != null) {
                        (_f = (_e = (_d = error === null || error === void 0 ? void 0 : error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.orderForm) === null || _f === void 0 ? void 0 : _f.messages.forEach((element) => {
                            responsePlaceOrder.error = {
                                message: element === null || element === void 0 ? void 0 : element.text,
                            };
                        });
                        responsePlaceOrder.error.totalizers = (_j = (_h = (_g = error === null || error === void 0 ? void 0 : error.response) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.orderForm) === null || _j === void 0 ? void 0 : _j.totalizers;
                    }
                    else {
                        if (((_l = (_k = error === null || error === void 0 ? void 0 : error.response) === null || _k === void 0 ? void 0 : _k.data) === null || _l === void 0 ? void 0 : _l.error) != null) {
                            responsePlaceOrder.error = {
                                message: (_p = (_o = (_m = error === null || error === void 0 ? void 0 : error.response) === null || _m === void 0 ? void 0 : _m.data) === null || _o === void 0 ? void 0 : _o.error) === null || _p === void 0 ? void 0 : _p.message,
                            };
                        }
                        else {
                            responsePlaceOrder.error = {
                                message: (_q = error === null || error === void 0 ? void 0 : error.response) === null || _q === void 0 ? void 0 : _q.data,
                            };
                        }
                    }
                    return responsePlaceOrder;
                }
            }
            else {
                return responseSetOrder;
            }
        }
        else {
            const responsePlaceOrder = {};
            responsePlaceOrder.error = {
                message: 'ERROR No se encuentra el cliente',
            };
            return responsePlaceOrder;
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.changeOrder = changeOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX29yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvbWlkZGxld2FyZXMvY2hhbmdlX29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJDQUFzQztBQUUvQixLQUFLLFVBQVUsV0FBVyxDQUM3QixDQUFNLEVBQ04sRUFBRSxJQUFJLEVBQXlCLEVBQy9CLEVBQUUsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFJLE1BQU0sRUFBRyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFHLFVBQVUsRUFBQyxFQUFXOztJQUU3RyxJQUFJO1FBQ0YsdUJBQXVCO1FBQ3ZCLElBQUksSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ25DLElBQUksT0FBTyxHQUFHLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGlCQUFpQixFQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxXQUFXLENBQUU7UUFDckYsSUFBSSxLQUFLLENBQUE7UUFDVCxLQUFLLEdBQUcsTUFBTSxZQUFZLENBQUMsV0FBVyxDQUFFLFVBQVUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNsRixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDbEIsS0FBSyxHQUFHLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBRSxVQUFVLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUN4RSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLE1BQU0sa0JBQWtCLEdBQVEsRUFBRSxDQUFBO2dCQUNsQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUc7b0JBQ3pCLE9BQU8sRUFBRSx5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QUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUSwwQ0FBRSxJQUFJLDBDQUFFLEtBQUssMENBQUUsT0FBTzs2QkFDL0MsQ0FBQTt5QkFDRjs2QkFBTTs0QkFDTCxrQkFBa0IsQ0FBQyxLQUFLLEdBQUc7Z0NBQ3pCLE9BQU8sUUFBRSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUSwwQ0FBRSxJQUFJOzZCQUMvQixDQUFBO3lCQUNGO3FCQUNGO29CQUNELE9BQU8sa0JBQWtCLENBQUE7aUJBQzFCO2FBRUE7aUJBQUk7Z0JBQ0gsT0FBTyxnQkFBZ0IsQ0FBQTthQUN4QjtTQUVGO2FBQU07WUFDTCxNQUFNLGtCQUFrQixHQUFRLEVBQUUsQ0FBQTtZQUNsQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUc7Z0JBQ3pCLE9BQU8sRUFBRSxrQ0FBa0M7YUFDNUMsQ0FBQTtZQUNELE9BQU8sa0JBQWtCLENBQUE7U0FDMUI7S0FLQTtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUVuQjtBQUdMLENBQUM7QUFoTUQsa0NBZ01DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlT3JkZXIgfSBmcm9tIFwiLi4vdHlwaW5ncy9jaGVja291dFwiXG5pbXBvcnQgeyBzZXRPcmRlciB9IGZyb20gXCIuL3NldF9vcmRlclwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VPcmRlcihcbiAgICBfOiBhbnksXG4gICAgeyBkYXRhIH06IHsgZGF0YTogQ2hhbmdlT3JkZXIgfSxcbiAgICB7IGNsaWVudHM6IHsgZGVjcnlwQ2xpZW50ICAsIG1hcmtldCAsIGNoZWNrb3V0RXh0ZXJuYWwgLHBheW1lbnRFeHRlcm5hbCAsb21zRXh0ZXJuYWwgLCBtYXN0ZXJEYXRhfSB9OiBDb250ZXh0XG4gICApIHtcbiAgICB0cnkge1xuICAgICAgLy9EZXNlbmNyaXB0YXIgZWwgZW1haWxcbiAgICAgIGxldCBta2V0ID0gYXdhaXQgbWFya2V0LmdldE1hcmtldCgpXG4gICAgICBsZXQgYWNjb3VudCA9IG1rZXQ/LmhhdmVQYXJlbnRBY2NvdW50ID8gbWtldD8ucGFyZW50QWNjb3VudE5hbWUgOiBta2V0Py5hY2NvdW50TmFtZSA7XG4gICAgICBsZXQgZW1haWxcbiAgICAgIGVtYWlsID0gYXdhaXQgZGVjcnlwQ2xpZW50LmRlY3J5cEVtYWlsIChgP2FsaWFzPSR7ZGF0YS5lbWFpbH1gLCBkYXRhLnNlbGxlck9yZGVyKVxuICAgICBpZiAoZW1haWwgPT0gbnVsbCkge1xuICAgICAgZW1haWwgPSBhd2FpdCBkZWNyeXBDbGllbnQuZGVjcnlwRW1haWwgKGA/YWxpYXM9JHtkYXRhLmVtYWlsfWAsIGFjY291bnQpXG4gICAgICBpZiAoZW1haWwgPT0gbnVsbCkge1xuICAgICAgICBjb25zdCByZXNwb25zZVBsYWNlT3JkZXI6IGFueSA9IHt9XG4gICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHtcbiAgICAgICAgICBtZXNzYWdlOiAnRVJST1IgTm8gc2UgcHVlZGUgZGVzZW5jcmlwdGFyIGVsIGVtYWlsJyxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VQbGFjZU9yZGVyXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbWFpbD8uZW1haWwuaW5jbHVkZXMoJ2N0LnZ0ZXguY29tLmJyJykpIHtcbiAgICAgIGVtYWlsID0gYXdhaXQgZGVjcnlwQ2xpZW50LmRlY3J5cEVtYWlsKGA/YWxpYXM9JHtlbWFpbC5lbWFpbH1gLCBta2V0LnBhcmVudEFjY291bnROYW1lIClcbiAgICAgIGlmIChlbWFpbCA9PSBudWxsKSB7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlUGxhY2VPcmRlcjogYW55ID0ge31cbiAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHtcbiAgICAgICAgbWVzc2FnZTogJ0VSUk9SIE5vIHNlIHB1ZWRlIGRlc2VuY3JpcHRhciBlbCBlbWFpbCcsXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2VQbGFjZU9yZGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbWFpbCA9IGF3YWl0IGVtYWlsLmVtYWlsXG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBlbWFpbCA9IGF3YWl0IGVtYWlsLmVtYWlsXG4gICAgfVxuICAgIC8vR0VUIENMSUVOVCBQUk9GSUxFXG4gICAgY29uc3QgcmVzcG9uc2VDbGllbnQgPSBhd2FpdCBjaGVja291dEV4dGVybmFsLmNsaWVudFByb2ZpbGUgKGVtYWlsICwgYWNjb3VudClcbiAgICBjb25zdCB1c2VyUHJvZmlsZUlkOiBzdHJpbmcgPSAoYXdhaXQgcmVzcG9uc2VDbGllbnQpLnVzZXJQcm9maWxlSWRcbiAgICBpZiAoYXdhaXQgdXNlclByb2ZpbGVJZCAhPSBudWxsKSB7XG4gICAgICAvL0NvbnN1bWlyIHNlcnZpY2lvIGRlIGNyZWFyIG9yZGVuIFBsYWNlIG9yZGVyXG4gICAgICBjb25zdCByZXNwb25zZVNldE9yZGVyOiBhbnkgPSBhd2FpdCBzZXRPcmRlcihkYXRhLCByZXNwb25zZUNsaWVudClcbiAgICAgIGlmKGF3YWl0IHJlc3BvbnNlU2V0T3JkZXIuZXJyb3IgPT0gbnVsbCl7XG4gICAgICAvL1NFVCBPUkRFUlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VQbGFjZU9yZGVyOiBhbnkgPSBhd2FpdCBjaGVja291dEV4dGVybmFsLnNldE5ld09yZGVyKHJlc3BvbnNlU2V0T3JkZXIgLCBhY2NvdW50KVxuICAgICAgICBpZiAoYXdhaXQgcmVzcG9uc2VQbGFjZU9yZGVyPy50cmFuc2FjdGlvbkRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5vcmRlcnMuZm9yRWFjaChcbiAgICAgICAgICAgIGFzeW5jIChvcmRlcjoge1xuICAgICAgICAgICAgICBzaGlwcGluZ0RhdGE6IHsgYWRkcmVzczogeyBhZGRyZXNzSWQ6IHN0cmluZyB9IH1cbiAgICAgICAgICAgICAgb3JkZXJHcm91cDogc3RyaW5nXG4gICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NJZDogc3RyaW5nID0gb3JkZXI/LnNoaXBwaW5nRGF0YT8uYWRkcmVzcz8uYWRkcmVzc0lkXG4gICAgICAgICAgICAgIGNvbnN0IG9yZGVyR3JvdXA6IHN0cmluZyA9IG9yZGVyLm9yZGVyR3JvdXBcbiAgICAgICAgICAgICAgLy9FbnZpYXIgbGEgaW5mb3JtYWNpw7NuIGRlIHBhZ29cbiAgICAgICAgICAgICAgcmVzcG9uc2VQbGFjZU9yZGVyLnRyYW5zYWN0aW9uRGF0YS5tZXJjaGFudFRyYW5zYWN0aW9ucy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIChtZXJjaGFudDoge1xuICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogc3RyaW5nXG4gICAgICAgICAgICAgICAgICBtZXJjaGFudE5hbWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgcGF5bWVudHM6IGFueVtdXG4gICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZDogc3RyaW5nID0gbWVyY2hhbnQudHJhbnNhY3Rpb25JZFxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVyY2hhbnROYW1lOiBzdHJpbmcgPSBtZXJjaGFudC5tZXJjaGFudE5hbWVcbiAgICAgICAgICAgICAgICAgIG1lcmNoYW50LnBheW1lbnRzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jIChwYXltZW50OiB7IHBheW1lbnRTeXN0ZW06IHN0cmluZzsgdmFsdWU6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF5bWVudFN5c3RlbTogc3RyaW5nID0gcGF5bWVudC5wYXltZW50U3lzdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWU6IG51bWJlciA9IHBheW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICBtZXJjaGFudC5wYXltZW50cy5mb3JFYWNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RDcmVhdGVUcmFuc2FjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0Q3JlYXRlVHJhbnNhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF0gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50U3lzdGVtOiBwYXltZW50U3lzdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbG1lbnRzOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSWQ6IGFkZHJlc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdHJhbnNhY3Rpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmNoYW50TmFtZTogbWVyY2hhbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiAnQ09MJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBheW1lbnRFeHRlcm5hbC5jcmVhdGVUcmFuc2FjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdENyZWF0ZVRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU0VORCB0byBXTCA1LSBBVVRIT1JJWkUgVFJBTlNBQ1RJT05cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RBdXRob3JpemVPcmRlcjogYW55ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkOiB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlRm9yUmVjdXJyZW5jeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBheW1lbnRFeHRlcm5hbC5hdXRob3JpemF0aW9uVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaXRlbXNPcmRlclswXS5zZWxsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBdXRob3JpemVPcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA2LSBHQVRFV0FZIENBTExCQUNLXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0Q2FsbGJhY2s6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJJZDogb3JkZXJHcm91cCArICctMDEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJHcm91cDogb3JkZXJHcm91cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnb3JkZXItY3JlYXRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBheW1lbnRFeHRlcm5hbC5nYXRld2F5Q2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyR3JvdXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDctIENhbmNlbCBPcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgb21zRXh0ZXJuYWwuY2FuY2VsT3JkZXIoZGF0YS5vcmRlcklkLCBkYXRhLnNlbGxlck9yZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIE1hcmtldHBsYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBvbXNFeHRlcm5hbC5jYW5jZWxPcmRlcihkYXRhLm1hcmtldHBsYWNlT3JkZXJJZCwgYWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDgtIERlbGV0ZSBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBtYXN0ZXJEYXRhLmRlbGV0ZUFkZHJlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICByZXNwb25zZVBsYWNlT3JkZXIuZXJyb3IgPSB7IG1lc3NhZ2U6ICdPUkRFTiBDUkVBREEgQ09SUkVDVEFNRU5URScgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZVBsYWNlT3JkZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2VQbGFjZU9yZGVyPy5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VQbGFjZU9yZGVyXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUGxhY2VPcmRlcjogYW55ID0ge31cbiAgICAgICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHt9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VQbGFjZU9yZGVyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCByZXNwb25zZVBsYWNlT3JkZXI6IGFueSA9IHt9XG4gICAgICAgIGlmIChlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm9yZGVyRm9ybT8ubWVzc2FnZXMgIT0gbnVsbCkge1xuICAgICAgICAgIGVycm9yPy5yZXNwb25zZT8uZGF0YT8ub3JkZXJGb3JtPy5tZXNzYWdlcy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZWxlbWVudD8udGV4dCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvci50b3RhbGl6ZXJzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5vcmRlckZvcm0/LnRvdGFsaXplcnNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXNwb25zZVBsYWNlT3JkZXIuZXJyb3IgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3I/Lm1lc3NhZ2UsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3I/LnJlc3BvbnNlPy5kYXRhLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VQbGFjZU9yZGVyXG4gICAgICB9XG5cbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VTZXRPcmRlclxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlUGxhY2VPcmRlcjogYW55ID0ge31cbiAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHtcbiAgICAgICAgbWVzc2FnZTogJ0VSUk9SIE5vIHNlIGVuY3VlbnRyYSBlbCBjbGllbnRlJyxcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwb25zZVBsYWNlT3JkZXJcbiAgICB9XG5cblxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG5cbiAgICB9XG5cblxufVxuXG4iXX0=