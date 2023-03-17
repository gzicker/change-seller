"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutClient = void 0;
const console = require("console");
const api_1 = require("@vtex/api");
const constants_1 = require("../../utils/constants");
class CheckoutClient extends api_1.JanusClient {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            headers: {
                ...(options && options.headers),
                ...(ctx.adminUserAuthToken
                    ? {
                        VtexIdclientAutCookie: ctx.adminUserAuthToken,
                        'Proxy-Authorization': ctx.adminUserAuthToken,
                    }
                    : null),
                'x-vtex-user-agent': ctx.userAgent,
            },
        });
    }
    /**
     * ChangeOrder
     */
    async changeOrder(data) {
        // Validar que el cliente este creado - consumir getClientProfile
        // Desencriptar el email
        let emaild = '';
        const email = await this.getEmail(data.email);
        if (email == null) {
            const responsePlaceOrder = {};
            responsePlaceOrder.error = {
                message: 'ERROR No se puede desencriptar el email',
            };
            return responsePlaceOrder;
        }
        if (email === null || email === void 0 ? void 0 : email.email.includes('ct.vtex.com.br')) {
            const email2 = await this.getEmailPpal(email.email);
            if (email2 == null) {
                const emailppal = await this.getEmail(email.email);
                emaild = (await emailppal).email;
            }
            else {
                emaild = (await email2).email;
            }
        }
        else {
            emaild = (await email).email;
        }
        const emailDecryp = emaild;
        const responseClient = await this.getClientProfile(emailDecryp);
        const { userProfileId } = await responseClient;
        if (userProfileId != null) {
            // Consumir servicio de crear orden Place order
            const mket = await this.getMket();
            const responsePlaceOrder = await this.setPlaceOrder(mket, data, responseClient);
            if ((responsePlaceOrder === null || responsePlaceOrder === void 0 ? void 0 : responsePlaceOrder.transactionData) != null) {
                responsePlaceOrder.orders.forEach(async (order) => {
                    var _a, _b;
                    const addressId = (_b = (_a = order === null || order === void 0 ? void 0 : order.shippingData) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.addressId;
                    const { orderGroup } = order;
                    // Enviar la información de pago
                    responsePlaceOrder.transactionData.merchantTransactions.forEach((merchant) => {
                        const { transactionId } = merchant;
                        const { merchantName } = merchant;
                        merchant.payments.forEach(async (payment) => {
                            const { paymentSystem } = payment;
                            const { value } = payment;
                            merchant.payments.forEach(async () => {
                                const requestCreateTransaction = [
                                    {
                                        paymentSystem,
                                        value,
                                        referenceValue: value,
                                        installments: '1',
                                        fields: {
                                            addressId,
                                        },
                                        transaction: {
                                            id: transactionId,
                                            merchantName,
                                        },
                                        currencyCode: 'COL',
                                    },
                                ];
                                await this.createTx(requestCreateTransaction, transactionId);
                                // SEND to WL 5- AUTHORIZE TRANSACTION
                                const requestAuthorizeOrder = {
                                    transactionId,
                                    prepareForRecurrency: false,
                                };
                                await this.authorizeOrder(requestAuthorizeOrder, merchantName, transactionId);
                                // 6- GATEWAY CALLBACK
                                const requestCallback = {
                                    orders: [
                                        {
                                            orderId: `${orderGroup}-01`,
                                            orderGroup,
                                            state: 'order-created',
                                        },
                                    ],
                                };
                                await this.sendgatewayCallback(requestCallback, orderGroup);
                                // 7- Cancel Order
                                await this.cancelOrder(data.orderId, data.sellerOrder);
                                // 8- Delete address
                                await this.deleteAddress(addressId, mket);
                            });
                        });
                    });
                });
                responsePlaceOrder.error = { message: 'ORDEN CREADA CORRECTAMENTE' };
                return responsePlaceOrder;
            }
            if ((responsePlaceOrder === null || responsePlaceOrder === void 0 ? void 0 : responsePlaceOrder.error) != null) {
                return responsePlaceOrder;
            }
            else {
                const responsePlaceOrder = {};
                responsePlaceOrder.error = {};
                return responsePlaceOrder;
            }
        }
        const responsePlaceOrder = {};
        responsePlaceOrder.error = {
            message: 'ERROR No se encuentra el cliente',
        };
        return responsePlaceOrder;
        return null;
    }
    /**
     * getClientProfile
     */
    async getMket() {
        try {
            const URI = this.routes.getMket();
            const response = await this.http.get(URI);
            return (response === null || response === void 0 ? void 0 : response.parentAccountName) == null
                ? response === null || response === void 0 ? void 0 : response.accountName : response === null || response === void 0 ? void 0 : response.parentAccountName;
        }
        catch (error) {
            return constants_1.AmbientePpal;
        }
    }
    /*
     * getClientProfile
     */
    async getClientProfile(email) {
        const URI = this.routes.clientProfile(email);
        const response = await this.http.get(URI, {
            params: { an: constants_1.AmbientePpal },
        });
        return response;
    }
    /**
     * getClientProfile
     */
    async getEmail(email) {
        const URI = this.routes.getEmail(email);
        const response = await this.http.get(URI, {
            headers: { 'X-VTEX-Use-Https': 'true' },
            params: {
                an: this.context.account,
            },
        });
        return response;
    }
    /**
     * getClientProfile
     */
    async getEmailPpal(email) {
        const URI = this.routes.getEmailPpal(email);
        const response = await this.http.get(URI, {
            headers: { 'X-VTEX-Use-Https': 'true' },
            params: {
                an: constants_1.AmbientePpal,
            },
        });
        return response;
    }
    /**
     * setOrder paso 3- CREATE ORDER
     */
    async setPlaceOrder(mket, data, client) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        let address;
        let existaddress = false;
        client === null || client === void 0 ? void 0 : client.availableAddresses.forEach((element) => {
            var _a, _b;
            if ((element === null || element === void 0 ? void 0 : element.addressId) == data.shippingData.address.addressId) {
                address = {
                    addressType: element.addressType,
                    receiverName: element.receiverName,
                    postalCode: element.postalCode,
                    city: element.city,
                    state: element.state,
                    country: element.country,
                    street: element.street,
                    number: element.number,
                    neighborhood: element.neighborhood,
                    complement: element.complement,
                    geoCoordinates: JSON.parse((_b = (_a = data === null || data === void 0 ? void 0 : data.shippingData) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.geoCoordinates),
                };
                existaddress = true;
            }
        });
        if (existaddress) {
            // construir objeto para crear la orden
            const logisticsInfo = [];
            data.itemsOrder.forEach((element, i) => {
                console.log(element);
                if (i == 0) {
                    const itm = {
                        itemIndex: i,
                        selectedSla: data.shippingData.logisticsInfoOrder.selectedSla,
                        price: data.shippingData.logisticsInfoOrder.price,
                        shippingEstimate: data.shippingData.logisticsInfoOrder.shippingEstimate,
                        deliveryWindow: data.shippingData.logisticsInfoOrder.deliveryWindow,
                    };
                    logisticsInfo.push(itm);
                }
                else {
                    const itm = {
                        itemIndex: i,
                        selectedSla: data.shippingData.logisticsInfoOrder.selectedSla,
                        price: 0,
                        shippingEstimate: data.shippingData.logisticsInfoOrder.shippingEstimate,
                        deliveryWindow: data.shippingData.logisticsInfoOrder.deliveryWindow,
                    };
                    logisticsInfo.push(itm);
                }
            });
            const itemsNewOrder = [];
            data.itemsOrder.forEach((element) => {
                const items = {
                    id: element.id,
                    quantity: element.quantity,
                    seller: element.seller,
                    price: element.price,
                    priceTags: element.priceTags,
                    attachments: JSON.parse(element.attachments),
                };
                itemsNewOrder.push(items);
            });
            const req = {
                clientProfileData: client === null || client === void 0 ? void 0 : client.userProfile,
                items: itemsNewOrder,
                shippingData: {
                    address,
                    logisticsInfo,
                },
                paymentData: data.paymentData,
                openTextField: { value: data.coments },
            };
            console.log('data', JSON.stringify(req));
            try {
                const URI = this.routes.placeOrder(mket);
                const response = await this.http.put(URI, req, {
                    params: { an: constants_1.AmbientePpal },
                });
                return response;
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
                else if (((_l = (_k = error === null || error === void 0 ? void 0 : error.response) === null || _k === void 0 ? void 0 : _k.data) === null || _l === void 0 ? void 0 : _l.error) != null) {
                    responsePlaceOrder.error = {
                        message: (_p = (_o = (_m = error === null || error === void 0 ? void 0 : error.response) === null || _m === void 0 ? void 0 : _m.data) === null || _o === void 0 ? void 0 : _o.error) === null || _p === void 0 ? void 0 : _p.message,
                    };
                }
                else {
                    responsePlaceOrder.error = {
                        message: (_q = error === null || error === void 0 ? void 0 : error.response) === null || _q === void 0 ? void 0 : _q.data,
                    };
                }
                return responsePlaceOrder;
            }
        }
        else {
            const responsePlaceOrder = {};
            responsePlaceOrder.error = {
                message: 'ESTA ORDEN YA FUE TRANSFERIDA ',
            };
            return responsePlaceOrder;
        }
    }
    /**
     * createTx paso 4- CREATE TRANSACTION
     */
    async createTx(data, transactionId) {
        const URI = this.routes.sendPaymentsInformation(transactionId);
        try {
            const response = await this.http.post(URI, data, {
                params: { an: constants_1.AmbientePpal },
            });
            return response;
        }
        catch (error) {
            console.log('Error TX ..', error.response.data);
        }
    }
    /**
     * 5- AUTHORIZE TRANSACTION
     */
    async authorizeOrder(data, seller, transactionId) {
        const URI = this.routes.authorizeOrder(seller, transactionId);
        try {
            const response = await this.http.post(URI, data, {
                params: { an: seller },
            });
            return response;
        }
        catch (error) {
            console.log('ERROR AUTH ..', error.response);
        }
    }
    /**
     * 6- GATEWAY CALLBACK
     */
    async sendgatewayCallback(data, orderGroup) {
        try {
            const response = await this.http.post(this.routes.gatewayCallback(orderGroup), data, {
                params: { an: constants_1.AmbientePpal },
            });
            return response;
        }
        catch (error) {
            console.log('ERROR CALLBACK ..', error.response.data);
        }
    }
    /**
     * 7- DELETE ADDRESS
     */
    async deleteAddress(addressId, sellerId) {
        var _a, _b, _c;
        try {
            const URIsearch = this.routes.searchAddress(sellerId);
            const search = await this.http.get(URIsearch, {
                params: {
                    addressName: addressId,
                    an: sellerId,
                },
                headers: {
                    VtexIdclientAutCookie: this.context.adminUserAuthToken,
                },
            });
            if ((_a = search === null || search === void 0 ? void 0 : search[0]) === null || _a === void 0 ? void 0 : _a.id) {
                const URI = this.routes.deleteAddress((_b = search === null || search === void 0 ? void 0 : search[0]) === null || _b === void 0 ? void 0 : _b.id, sellerId);
                await this.http.delete(URI, {
                    params: {
                        an: sellerId,
                    },
                    headers: {
                        VtexIdclientAutCookie: this.context.adminUserAuthToken,
                    },
                });
            }
            else {
                console.log('NO EXISTE LA DIRECCIÓN');
            }
        }
        catch (error) {
            console.log('Error DELETE ..', (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data);
        }
    }
    /**
     * 7- CANCEL ORDER
     */
    async cancelOrder(orderId, sellerId) {
        try {
            const URI = this.routes.cancelOrder(orderId);
            const response = await this.http.post(URI, {
                params: { an: sellerId },
            });
            if ((response === null || response === void 0 ? void 0 : response.receipt) == null) {
                const URI = this.routes.cancelOrder(orderId);
                await this.http.post(URI, {
                    params: { an: sellerId },
                });
            }
            return response;
        }
        catch (error) {
            console.log('Error CANCEL ORDER ..', error.response.data);
            return error;
        }
    }
    get routes() {
        const baseChecoukt = `https://${constants_1.AmbientePpal}.vtexcommercestable.com.br/api/checkout/pub/`;
        const baseTx = `https://${constants_1.AmbientePpal}.vtexpayments.com.br/api/pub/transactions/`;
        const baseTxWL = '.vtexpayments.com.br/api/pvt/transactions/';
        const baseEmail = 'https://conversationtracker.vtex.com.br/api/pvt/emailMapping';
        const gatewayCallback = `https://${constants_1.AmbientePpal}.vtexcommercestable.com.br/api/checkout/pub/gatewayCallback/`;
        const deleteAdress = '.vtexcommercestable.com.br/api/dataentities/AD/';
        const cancelOrder = '/api/oms/pvt/orders/';
        const getMket = '/api/vlm/account';
        return {
            clientProfile: (email) => `${baseChecoukt}profiles?email=${email}`,
            placeOrder: (mket) => `https://${mket}.vtexcommercestable.com.br/api/checkout/pub/orders`,
            sendPaymentsInformation: (transactionId) => `${baseTx}${transactionId}/payments`,
            processOrder: (orderGroup) => `${baseTx}gatewayCallback/${orderGroup}`,
            getEmail: (email) => `${baseEmail}?alias=${email}`,
            getEmailPpal: (email) => `${baseEmail}?alias=${email}`,
            authorizeOrder: (seller, transactionId) => `https://${seller}${baseTxWL}${transactionId}/authorization-request`,
            gatewayCallback: (orderGroup) => `${gatewayCallback}${orderGroup}`,
            searchAddress: (sellerId) => `https://${sellerId}${deleteAdress}search`,
            deleteAddress: (addressId, sellerId) => `https://${sellerId}${deleteAdress}documents/${addressId}`,
            cancelOrder: (orderId) => `${cancelOrder}${orderId}/cancel`,
            getMket: () => `https://${this.context.account}.vtexcommercestable.com.br${getMket}`,
        };
    }
}
exports.CheckoutClient = CheckoutClient;
12;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX29yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvY2xpZW50cy9jaGFuZ2Vfb3JkZXIvY2hhbmdlX29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUduQyxtQ0FBdUM7QUFHdkMscURBQW9EO0FBRXBELE1BQWEsY0FBZSxTQUFRLGlCQUFXO0lBQzdDLFlBQVksR0FBYyxFQUFFLE9BQXlCO1FBQ25ELEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVCxHQUFHLE9BQU87WUFDVixPQUFPLEVBQUU7Z0JBQ1AsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtvQkFDeEIsQ0FBQyxDQUFDO3dCQUNFLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxrQkFBa0I7d0JBQzdDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxrQkFBa0I7cUJBQzlDO29CQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFNBQVM7YUFDbkM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQWlCO1FBQ3hDLGlFQUFpRTtRQUNqRSx3QkFBd0I7UUFDeEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ2YsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUU3QyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsTUFBTSxrQkFBa0IsR0FBUSxFQUFFLENBQUE7WUFFbEMsa0JBQWtCLENBQUMsS0FBSyxHQUFHO2dCQUN6QixPQUFPLEVBQUUseUNBQXlDO2FBQ25ELENBQUE7WUFFRCxPQUFPLGtCQUFrQixDQUFBO1NBQzFCO1FB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QUNyRSx1QkFBdUIsRUFBRSxDQUFDLGFBQXFCLEVBQUUsRUFBRSxDQUNqRCxHQUFHLE1BQU0sR0FBRyxhQUFhLFdBQVc7WUFDdEMsWUFBWSxFQUFFLENBQUMsVUFBa0IsRUFBRSxFQUFFLENBQ25DLEdBQUcsTUFBTSxtQkFBbUIsVUFBVSxFQUFFO1lBQzFDLFFBQVEsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLFVBQVUsS0FBSyxFQUFFO1lBQzFELFlBQVksRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLFVBQVUsS0FBSyxFQUFFO1lBQzlELGNBQWMsRUFBRSxDQUFDLE1BQWMsRUFBRSxhQUFxQixFQUFFLEVBQUUsQ0FDeEQsV0FBVyxNQUFNLEdBQUcsUUFBUSxHQUFHLGFBQWEsd0JBQXdCO1lBQ3RFLGVBQWUsRUFBRSxDQUFDLFVBQWtCLEVBQUUsRUFBRSxDQUN0QyxHQUFHLGVBQWUsR0FBRyxVQUFVLEVBQUU7WUFDbkMsYUFBYSxFQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQ2xDLFdBQVcsUUFBUSxHQUFHLFlBQVksUUFBUTtZQUM1QyxhQUFhLEVBQUUsQ0FBQyxTQUFpQixFQUFFLFFBQWdCLEVBQUUsRUFBRSxDQUNyRCxXQUFXLFFBQVEsR0FBRyxZQUFZLGFBQWEsU0FBUyxFQUFFO1lBQzVELFdBQVcsRUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQUMsR0FBRyxXQUFXLEdBQUcsT0FBTyxTQUFTO1lBQ25FLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDWixXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyw2QkFBNkIsT0FBTyxFQUFFO1NBQ3hFLENBQUE7SUFDSCxDQUFDO0NBQ0Y7QUFsaEJELHdDQWtoQkM7QUFDRCxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uc29sZSA9IHJlcXVpcmUoJ2NvbnNvbGUnKVxuXG5pbXBvcnQgdHlwZSB7IEluc3RhbmNlT3B0aW9ucywgSU9Db250ZXh0IH0gZnJvbSAnQHZ0ZXgvYXBpJ1xuaW1wb3J0IHsgSmFudXNDbGllbnQgfSBmcm9tICdAdnRleC9hcGknXG5cbmltcG9ydCB0eXBlIHsgQ2hhbmdlT3JkZXIgfSBmcm9tICcuLi8uLi90eXBpbmdzL2NoZWNrb3V0J1xuaW1wb3J0IHsgQW1iaWVudGVQcGFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJ1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDbGllbnQgZXh0ZW5kcyBKYW51c0NsaWVudCB7XG4gIGNvbnN0cnVjdG9yKGN0eDogSU9Db250ZXh0LCBvcHRpb25zPzogSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoY3R4LCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi4ob3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMpLFxuICAgICAgICAuLi4oY3R4LmFkbWluVXNlckF1dGhUb2tlblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBWdGV4SWRjbGllbnRBdXRDb29raWU6IGN0eC5hZG1pblVzZXJBdXRoVG9rZW4sXG4gICAgICAgICAgICAgICdQcm94eS1BdXRob3JpemF0aW9uJzogY3R4LmFkbWluVXNlckF1dGhUb2tlbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGwpLFxuICAgICAgICAneC12dGV4LXVzZXItYWdlbnQnOiBjdHgudXNlckFnZW50LFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZU9yZGVyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY2hhbmdlT3JkZXIoZGF0YTogQ2hhbmdlT3JkZXIpIHtcbiAgICAvLyBWYWxpZGFyIHF1ZSBlbCBjbGllbnRlIGVzdGUgY3JlYWRvIC0gY29uc3VtaXIgZ2V0Q2xpZW50UHJvZmlsZVxuICAgIC8vIERlc2VuY3JpcHRhciBlbCBlbWFpbFxuICAgIGxldCBlbWFpbGQgPSAnJ1xuICAgIGNvbnN0IGVtYWlsID0gYXdhaXQgdGhpcy5nZXRFbWFpbChkYXRhLmVtYWlsKVxuXG4gICAgaWYgKGVtYWlsID09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlUGxhY2VPcmRlcjogYW55ID0ge31cblxuICAgICAgcmVzcG9uc2VQbGFjZU9yZGVyLmVycm9yID0ge1xuICAgICAgICBtZXNzYWdlOiAnRVJST1IgTm8gc2UgcHVlZGUgZGVzZW5jcmlwdGFyIGVsIGVtYWlsJyxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlUGxhY2VPcmRlclxuICAgIH1cblxuICAgIGlmIChlbWFpbD8uZW1haWwuaW5jbHVkZXMoJ2N0LnZ0ZXguY29tLmJyJykpIHtcbiAgICAgIGNvbnN0IGVtYWlsMiA9IGF3YWl0IHRoaXMuZ2V0RW1haWxQcGFsKGVtYWlsLmVtYWlsKVxuXG4gICAgICBpZiAoZW1haWwyID09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZW1haWxwcGFsID0gYXdhaXQgdGhpcy5nZXRFbWFpbChlbWFpbC5lbWFpbClcblxuICAgICAgICBlbWFpbGQgPSAoYXdhaXQgZW1haWxwcGFsKS5lbWFpbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1haWxkID0gKGF3YWl0IGVtYWlsMikuZW1haWxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZW1haWxkID0gKGF3YWl0IGVtYWlsKS5lbWFpbFxuICAgIH1cblxuICAgIGNvbnN0IGVtYWlsRGVjcnlwOiBzdHJpbmcgPSBlbWFpbGRcbiAgICBjb25zdCByZXNwb25zZUNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50UHJvZmlsZShlbWFpbERlY3J5cClcbiAgICBjb25zdCB7IHVzZXJQcm9maWxlSWQgfSA9IGF3YWl0IHJlc3BvbnNlQ2xpZW50XG5cbiAgICBpZiAodXNlclByb2ZpbGVJZCAhPSBudWxsKSB7XG4gICAgICAvLyBDb25zdW1pciBzZXJ2aWNpbyBkZSBjcmVhciBvcmRlbiBQbGFjZSBvcmRlclxuICAgICAgY29uc3QgbWtldDogYW55ID0gYXdhaXQgdGhpcy5nZXRNa2V0KClcblxuICAgICAgY29uc3QgcmVzcG9uc2VQbGFjZU9yZGVyOiBhbnkgPSBhd2FpdCB0aGlzLnNldFBsYWNlT3JkZXIoXG4gICAgICAgIG1rZXQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHJlc3BvbnNlQ2xpZW50XG4gICAgICApXG5cbiAgICAgIGlmIChyZXNwb25zZVBsYWNlT3JkZXI/LnRyYW5zYWN0aW9uRGF0YSAhPSBudWxsKSB7XG4gICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5vcmRlcnMuZm9yRWFjaChcbiAgICAgICAgICBhc3luYyAob3JkZXI6IHtcbiAgICAgICAgICAgIHNoaXBwaW5nRGF0YTogeyBhZGRyZXNzOiB7IGFkZHJlc3NJZDogc3RyaW5nIH0gfVxuICAgICAgICAgICAgb3JkZXJHcm91cDogc3RyaW5nXG4gICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRkcmVzc0lkOiBzdHJpbmcgPSBvcmRlcj8uc2hpcHBpbmdEYXRhPy5hZGRyZXNzPy5hZGRyZXNzSWRcbiAgICAgICAgICAgIGNvbnN0IHsgb3JkZXJHcm91cCB9ID0gb3JkZXJcblxuICAgICAgICAgICAgLy8gRW52aWFyIGxhIGluZm9ybWFjacOzbiBkZSBwYWdvXG4gICAgICAgICAgICByZXNwb25zZVBsYWNlT3JkZXIudHJhbnNhY3Rpb25EYXRhLm1lcmNoYW50VHJhbnNhY3Rpb25zLmZvckVhY2goXG4gICAgICAgICAgICAgIChtZXJjaGFudDoge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQ6IHN0cmluZ1xuICAgICAgICAgICAgICAgIG1lcmNoYW50TmFtZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgcGF5bWVudHM6IGFueVtdXG4gICAgICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRyYW5zYWN0aW9uSWQgfSA9IG1lcmNoYW50XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtZXJjaGFudE5hbWUgfSA9IG1lcmNoYW50XG5cbiAgICAgICAgICAgICAgICBtZXJjaGFudC5wYXltZW50cy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgYXN5bmMgKHBheW1lbnQ6IHsgcGF5bWVudFN5c3RlbTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYXltZW50U3lzdGVtIH0gPSBwYXltZW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHBheW1lbnRcblxuICAgICAgICAgICAgICAgICAgICBtZXJjaGFudC5wYXltZW50cy5mb3JFYWNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0Q3JlYXRlVHJhbnNhY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3RDcmVhdGVUcmFuc2FjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRTeXN0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxtZW50czogJzEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyY2hhbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6ICdDT0wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVR4KFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdENyZWF0ZVRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZFxuICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIFNFTkQgdG8gV0wgNS0gQVVUSE9SSVpFIFRSQU5TQUNUSU9OXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdEF1dGhvcml6ZU9yZGVyOiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGFyZUZvclJlY3VycmVuY3k6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYXV0aG9yaXplT3JkZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QXV0aG9yaXplT3JkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJjaGFudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkXG4gICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gNi0gR0FURVdBWSBDQUxMQkFDS1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RDYWxsYmFjazogYW55ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcklkOiBgJHtvcmRlckdyb3VwfS0wMWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJHcm91cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ29yZGVyLWNyZWF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNlbmRnYXRld2F5Q2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlckdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIC8vIDctIENhbmNlbCBPcmRlclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY2FuY2VsT3JkZXIoZGF0YS5vcmRlcklkLCBkYXRhLnNlbGxlck9yZGVyKVxuICAgICAgICAgICAgICAgICAgICAgIC8vIDgtIERlbGV0ZSBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVBZGRyZXNzKGFkZHJlc3NJZCwgbWtldClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgcmVzcG9uc2VQbGFjZU9yZGVyLmVycm9yID0geyBtZXNzYWdlOiAnT1JERU4gQ1JFQURBIENPUlJFQ1RBTUVOVEUnIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VQbGFjZU9yZGVyXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNwb25zZVBsYWNlT3JkZXI/LmVycm9yICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlUGxhY2VPcmRlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VQbGFjZU9yZGVyOiBhbnkgPSB7fVxuXG4gICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHt9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlUGxhY2VPcmRlclxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlUGxhY2VPcmRlcjogYW55ID0ge31cblxuICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHtcbiAgICAgIG1lc3NhZ2U6ICdFUlJPUiBObyBzZSBlbmN1ZW50cmEgZWwgY2xpZW50ZScsXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlUGxhY2VPcmRlclxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRDbGllbnRQcm9maWxlXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0TWtldCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgVVJJID0gdGhpcy5yb3V0ZXMuZ2V0TWtldCgpXG4gICAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgdGhpcy5odHRwLmdldChVUkkpXG5cbiAgICAgIHJldHVybiByZXNwb25zZT8ucGFyZW50QWNjb3VudE5hbWUgPT0gbnVsbFxuICAgICAgICA/IHJlc3BvbnNlPy5hY2NvdW50TmFtZVxuICAgICAgICA6IHJlc3BvbnNlPy5wYXJlbnRBY2NvdW50TmFtZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gQW1iaWVudGVQcGFsXG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogZ2V0Q2xpZW50UHJvZmlsZVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldENsaWVudFByb2ZpbGUoZW1haWw6IHN0cmluZykge1xuICAgIGNvbnN0IFVSSSA9IHRoaXMucm91dGVzLmNsaWVudFByb2ZpbGUoZW1haWwpXG4gICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoVVJJLCB7XG4gICAgICBwYXJhbXM6IHsgYW46IEFtYmllbnRlUHBhbCB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRDbGllbnRQcm9maWxlXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0RW1haWwoZW1haWw6IHN0cmluZykge1xuICAgIGNvbnN0IFVSSSA9IHRoaXMucm91dGVzLmdldEVtYWlsKGVtYWlsKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChVUkksIHtcbiAgICAgIGhlYWRlcnM6IHsgJ1gtVlRFWC1Vc2UtSHR0cHMnOiAndHJ1ZScgfSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhbjogdGhpcy5jb250ZXh0LmFjY291bnQsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRDbGllbnRQcm9maWxlXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0RW1haWxQcGFsKGVtYWlsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBVUkkgPSB0aGlzLnJvdXRlcy5nZXRFbWFpbFBwYWwoZW1haWwpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFVSSSwge1xuICAgICAgaGVhZGVyczogeyAnWC1WVEVYLVVzZS1IdHRwcyc6ICd0cnVlJyB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGFuOiBBbWJpZW50ZVBwYWwsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRPcmRlciBwYXNvIDMtIENSRUFURSBPUkRFUlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHNldFBsYWNlT3JkZXIobWtldDogc3RyaW5nLCBkYXRhOiBhbnksIGNsaWVudDogYW55KSB7XG4gICAgbGV0IGFkZHJlc3M6IGFueVxuICAgIGxldCBleGlzdGFkZHJlc3MgPSBmYWxzZVxuXG4gICAgY2xpZW50Py5hdmFpbGFibGVBZGRyZXNzZXMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudD8uYWRkcmVzc0lkID09IGRhdGEuc2hpcHBpbmdEYXRhLmFkZHJlc3MuYWRkcmVzc0lkKSB7XG4gICAgICAgIGFkZHJlc3MgPSB7XG4gICAgICAgICAgYWRkcmVzc1R5cGU6IGVsZW1lbnQuYWRkcmVzc1R5cGUsXG4gICAgICAgICAgcmVjZWl2ZXJOYW1lOiBlbGVtZW50LnJlY2VpdmVyTmFtZSxcbiAgICAgICAgICBwb3N0YWxDb2RlOiBlbGVtZW50LnBvc3RhbENvZGUsXG4gICAgICAgICAgY2l0eTogZWxlbWVudC5jaXR5LFxuICAgICAgICAgIHN0YXRlOiBlbGVtZW50LnN0YXRlLFxuICAgICAgICAgIGNvdW50cnk6IGVsZW1lbnQuY291bnRyeSxcbiAgICAgICAgICBzdHJlZXQ6IGVsZW1lbnQuc3RyZWV0LFxuICAgICAgICAgIG51bWJlcjogZWxlbWVudC5udW1iZXIsXG4gICAgICAgICAgbmVpZ2hib3Job29kOiBlbGVtZW50Lm5laWdoYm9yaG9vZCxcbiAgICAgICAgICBjb21wbGVtZW50OiBlbGVtZW50LmNvbXBsZW1lbnQsXG4gICAgICAgICAgZ2VvQ29vcmRpbmF0ZXM6IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBkYXRhPy5zaGlwcGluZ0RhdGE/LmFkZHJlc3M/Lmdlb0Nvb3JkaW5hdGVzXG4gICAgICAgICAgKSxcbiAgICAgICAgfVxuICAgICAgICBleGlzdGFkZHJlc3MgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoZXhpc3RhZGRyZXNzKSB7XG4gICAgICAvLyBjb25zdHJ1aXIgb2JqZXRvIHBhcmEgY3JlYXIgbGEgb3JkZW5cbiAgICAgIGNvbnN0IGxvZ2lzdGljc0luZm86IEFycmF5PHt9PiA9IFtdXG5cbiAgICAgIGRhdGEuaXRlbXNPcmRlci5mb3JFYWNoKChlbGVtZW50OiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgY29uc3QgaXRtID0ge1xuICAgICAgICAgICAgaXRlbUluZGV4OiBpLFxuICAgICAgICAgICAgc2VsZWN0ZWRTbGE6IGRhdGEuc2hpcHBpbmdEYXRhLmxvZ2lzdGljc0luZm9PcmRlci5zZWxlY3RlZFNsYSxcbiAgICAgICAgICAgIHByaWNlOiBkYXRhLnNoaXBwaW5nRGF0YS5sb2dpc3RpY3NJbmZvT3JkZXIucHJpY2UsXG4gICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRlOlxuICAgICAgICAgICAgICBkYXRhLnNoaXBwaW5nRGF0YS5sb2dpc3RpY3NJbmZvT3JkZXIuc2hpcHBpbmdFc3RpbWF0ZSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5V2luZG93OiBkYXRhLnNoaXBwaW5nRGF0YS5sb2dpc3RpY3NJbmZvT3JkZXIuZGVsaXZlcnlXaW5kb3csXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbG9naXN0aWNzSW5mby5wdXNoKGl0bSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpdG0gPSB7XG4gICAgICAgICAgICBpdGVtSW5kZXg6IGksXG4gICAgICAgICAgICBzZWxlY3RlZFNsYTogZGF0YS5zaGlwcGluZ0RhdGEubG9naXN0aWNzSW5mb09yZGVyLnNlbGVjdGVkU2xhLFxuICAgICAgICAgICAgcHJpY2U6IDAsXG4gICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRlOlxuICAgICAgICAgICAgICBkYXRhLnNoaXBwaW5nRGF0YS5sb2dpc3RpY3NJbmZvT3JkZXIuc2hpcHBpbmdFc3RpbWF0ZSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5V2luZG93OiBkYXRhLnNoaXBwaW5nRGF0YS5sb2dpc3RpY3NJbmZvT3JkZXIuZGVsaXZlcnlXaW5kb3csXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbG9naXN0aWNzSW5mby5wdXNoKGl0bSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNvbnN0IGl0ZW1zTmV3T3JkZXI6IEFycmF5PHt9PiA9IFtdXG5cbiAgICAgIGRhdGEuaXRlbXNPcmRlci5mb3JFYWNoKFxuICAgICAgICAoZWxlbWVudDoge1xuICAgICAgICAgIGlkOiBhbnlcbiAgICAgICAgICBxdWFudGl0eTogYW55XG4gICAgICAgICAgc2VsbGVyOiBhbnlcbiAgICAgICAgICBwcmljZTogYW55XG4gICAgICAgICAgYXR0YWNobWVudHM6IGFueVxuICAgICAgICAgIHByaWNlVGFnczogYW55XG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtczogYW55ID0ge1xuICAgICAgICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICBxdWFudGl0eTogZWxlbWVudC5xdWFudGl0eSxcbiAgICAgICAgICAgIHNlbGxlcjogZWxlbWVudC5zZWxsZXIsXG4gICAgICAgICAgICBwcmljZTogZWxlbWVudC5wcmljZSxcbiAgICAgICAgICAgIHByaWNlVGFnczogZWxlbWVudC5wcmljZVRhZ3MsXG4gICAgICAgICAgICBhdHRhY2htZW50czogSlNPTi5wYXJzZShlbGVtZW50LmF0dGFjaG1lbnRzKSxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpdGVtc05ld09yZGVyLnB1c2goaXRlbXMpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgICAgY2xpZW50UHJvZmlsZURhdGE6IGNsaWVudD8udXNlclByb2ZpbGUsXG4gICAgICAgIGl0ZW1zOiBpdGVtc05ld09yZGVyLFxuICAgICAgICBzaGlwcGluZ0RhdGE6IHtcbiAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgIGxvZ2lzdGljc0luZm8sXG4gICAgICAgIH0sXG4gICAgICAgIHBheW1lbnREYXRhOiBkYXRhLnBheW1lbnREYXRhLFxuICAgICAgICBvcGVuVGV4dEZpZWxkOiB7IHZhbHVlOiBkYXRhLmNvbWVudHMgfSxcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShyZXEpKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgVVJJID0gdGhpcy5yb3V0ZXMucGxhY2VPcmRlcihta2V0KVxuICAgICAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgdGhpcy5odHRwLnB1dChVUkksIHJlcSwge1xuICAgICAgICAgIHBhcmFtczogeyBhbjogQW1iaWVudGVQcGFsIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCByZXNwb25zZVBsYWNlT3JkZXI6IGFueSA9IHt9XG5cbiAgICAgICAgaWYgKGVycm9yPy5yZXNwb25zZT8uZGF0YT8ub3JkZXJGb3JtPy5tZXNzYWdlcyAhPSBudWxsKSB7XG4gICAgICAgICAgZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5vcmRlckZvcm0/Lm1lc3NhZ2VzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2VQbGFjZU9yZGVyLmVycm9yID0ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlbGVtZW50Py50ZXh0LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVzcG9uc2VQbGFjZU9yZGVyLmVycm9yLnRvdGFsaXplcnMgPVxuICAgICAgICAgICAgZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5vcmRlckZvcm0/LnRvdGFsaXplcnNcbiAgICAgICAgfSBlbHNlIGlmIChlcnJvcj8ucmVzcG9uc2U/LmRhdGE/LmVycm9yICE9IG51bGwpIHtcbiAgICAgICAgICByZXNwb25zZVBsYWNlT3JkZXIuZXJyb3IgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/LmVycm9yPy5tZXNzYWdlLFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNwb25zZVBsYWNlT3JkZXIuZXJyb3IgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvcj8ucmVzcG9uc2U/LmRhdGEsXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlUGxhY2VPcmRlclxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwb25zZVBsYWNlT3JkZXI6IGFueSA9IHt9XG5cbiAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHtcbiAgICAgICAgbWVzc2FnZTogJ0VTVEEgT1JERU4gWUEgRlVFIFRSQU5TRkVSSURBICcsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZVBsYWNlT3JkZXJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlVHggcGFzbyA0LSBDUkVBVEUgVFJBTlNBQ1RJT05cbiAgICovXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVUeChcbiAgICBkYXRhOiBbUmVxdWVzdENyZWF0ZVRyYW5zYWN0aW9uXSxcbiAgICB0cmFuc2FjdGlvbklkOiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgVVJJID0gdGhpcy5yb3V0ZXMuc2VuZFBheW1lbnRzSW5mb3JtYXRpb24odHJhbnNhY3Rpb25JZClcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoVVJJLCBkYXRhLCB7XG4gICAgICAgIHBhcmFtczogeyBhbjogQW1iaWVudGVQcGFsIH0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIFRYIC4uJywgZXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogNS0gQVVUSE9SSVpFIFRSQU5TQUNUSU9OXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgYXV0aG9yaXplT3JkZXIoXG4gICAgZGF0YTogYW55LFxuICAgIHNlbGxlcjogc3RyaW5nLFxuICAgIHRyYW5zYWN0aW9uSWQ6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBVUkkgPSB0aGlzLnJvdXRlcy5hdXRob3JpemVPcmRlcihzZWxsZXIsIHRyYW5zYWN0aW9uSWQpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFVSSSwgZGF0YSwge1xuICAgICAgICBwYXJhbXM6IHsgYW46IHNlbGxlciB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBBVVRIIC4uJywgZXJyb3IucmVzcG9uc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIDYtIEdBVEVXQVkgQ0FMTEJBQ0tcbiAgICovXG4gIHB1YmxpYyBhc3luYyBzZW5kZ2F0ZXdheUNhbGxiYWNrKGRhdGE6IGFueSwgb3JkZXJHcm91cDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoXG4gICAgICAgIHRoaXMucm91dGVzLmdhdGV3YXlDYWxsYmFjayhvcmRlckdyb3VwKSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogeyBhbjogQW1iaWVudGVQcGFsIH0sXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBDQUxMQkFDSyAuLicsIGVycm9yLnJlc3BvbnNlLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIDctIERFTEVURSBBRERSRVNTXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZGVsZXRlQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZywgc2VsbGVySWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBVUklzZWFyY2ggPSB0aGlzLnJvdXRlcy5zZWFyY2hBZGRyZXNzKHNlbGxlcklkKVxuICAgICAgY29uc3Qgc2VhcmNoOiBhbnkgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFVSSXNlYXJjaCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhZGRyZXNzTmFtZTogYWRkcmVzc0lkLFxuICAgICAgICAgIGFuOiBzZWxsZXJJZCxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFZ0ZXhJZGNsaWVudEF1dENvb2tpZTogdGhpcy5jb250ZXh0LmFkbWluVXNlckF1dGhUb2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzZWFyY2g/LlswXT8uaWQpIHtcbiAgICAgICAgY29uc3QgVVJJID0gdGhpcy5yb3V0ZXMuZGVsZXRlQWRkcmVzcyhzZWFyY2g/LlswXT8uaWQsIHNlbGxlcklkKVxuXG4gICAgICAgIGF3YWl0IHRoaXMuaHR0cC5kZWxldGUoVVJJLCB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBhbjogc2VsbGVySWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBWdGV4SWRjbGllbnRBdXRDb29raWU6IHRoaXMuY29udGV4dC5hZG1pblVzZXJBdXRoVG9rZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOTyBFWElTVEUgTEEgRElSRUNDScOTTicpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBERUxFVEUgLi4nLCBlcnJvcj8ucmVzcG9uc2U/LmRhdGEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIDctIENBTkNFTCBPUkRFUlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGNhbmNlbE9yZGVyKG9yZGVySWQ6IHN0cmluZywgc2VsbGVySWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBVUkkgPSB0aGlzLnJvdXRlcy5jYW5jZWxPcmRlcihvcmRlcklkKVxuICAgICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFVSSSwge1xuICAgICAgICBwYXJhbXM6IHsgYW46IHNlbGxlcklkIH0sXG4gICAgICB9KVxuXG4gICAgICBpZiAocmVzcG9uc2U/LnJlY2VpcHQgPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBVUkkgPSB0aGlzLnJvdXRlcy5jYW5jZWxPcmRlcihvcmRlcklkKVxuXG4gICAgICAgIGF3YWl0IHRoaXMuaHR0cC5wb3N0KFVSSSwge1xuICAgICAgICAgIHBhcmFtczogeyBhbjogc2VsbGVySWQgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBDQU5DRUwgT1JERVIgLi4nLCBlcnJvci5yZXNwb25zZS5kYXRhKVxuXG4gICAgICByZXR1cm4gZXJyb3JcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCByb3V0ZXMoKSB7XG4gICAgY29uc3QgYmFzZUNoZWNvdWt0ID0gYGh0dHBzOi8vJHtBbWJpZW50ZVBwYWx9LnZ0ZXhjb21tZXJjZXN0YWJsZS5jb20uYnIvYXBpL2NoZWNrb3V0L3B1Yi9gXG5cbiAgICBjb25zdCBiYXNlVHggPSBgaHR0cHM6Ly8ke0FtYmllbnRlUHBhbH0udnRleHBheW1lbnRzLmNvbS5ici9hcGkvcHViL3RyYW5zYWN0aW9ucy9gXG5cbiAgICBjb25zdCBiYXNlVHhXTCA9ICcudnRleHBheW1lbnRzLmNvbS5ici9hcGkvcHZ0L3RyYW5zYWN0aW9ucy8nXG4gICAgY29uc3QgYmFzZUVtYWlsID1cbiAgICAgICdodHRwczovL2NvbnZlcnNhdGlvbnRyYWNrZXIudnRleC5jb20uYnIvYXBpL3B2dC9lbWFpbE1hcHBpbmcnXG5cbiAgICBjb25zdCBnYXRld2F5Q2FsbGJhY2sgPSBgaHR0cHM6Ly8ke0FtYmllbnRlUHBhbH0udnRleGNvbW1lcmNlc3RhYmxlLmNvbS5ici9hcGkvY2hlY2tvdXQvcHViL2dhdGV3YXlDYWxsYmFjay9gXG5cbiAgICBjb25zdCBkZWxldGVBZHJlc3MgPSAnLnZ0ZXhjb21tZXJjZXN0YWJsZS5jb20uYnIvYXBpL2RhdGFlbnRpdGllcy9BRC8nXG4gICAgY29uc3QgY2FuY2VsT3JkZXIgPSAnL2FwaS9vbXMvcHZ0L29yZGVycy8nXG4gICAgY29uc3QgZ2V0TWtldCA9ICcvYXBpL3ZsbS9hY2NvdW50J1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsaWVudFByb2ZpbGU6IChlbWFpbDogc3RyaW5nKSA9PlxuICAgICAgICBgJHtiYXNlQ2hlY291a3R9cHJvZmlsZXM/ZW1haWw9JHtlbWFpbH1gLFxuXG4gICAgICBwbGFjZU9yZGVyOiAobWtldDogc3RyaW5nKSA9PlxuICAgICAgICBgaHR0cHM6Ly8ke21rZXR9LnZ0ZXhjb21tZXJjZXN0YWJsZS5jb20uYnIvYXBpL2NoZWNrb3V0L3B1Yi9vcmRlcnNgLFxuICAgICAgc2VuZFBheW1lbnRzSW5mb3JtYXRpb246ICh0cmFuc2FjdGlvbklkOiBzdHJpbmcpID0+XG4gICAgICAgIGAke2Jhc2VUeH0ke3RyYW5zYWN0aW9uSWR9L3BheW1lbnRzYCxcbiAgICAgIHByb2Nlc3NPcmRlcjogKG9yZGVyR3JvdXA6IHN0cmluZykgPT5cbiAgICAgICAgYCR7YmFzZVR4fWdhdGV3YXlDYWxsYmFjay8ke29yZGVyR3JvdXB9YCxcbiAgICAgIGdldEVtYWlsOiAoZW1haWw6IHN0cmluZykgPT4gYCR7YmFzZUVtYWlsfT9hbGlhcz0ke2VtYWlsfWAsXG4gICAgICBnZXRFbWFpbFBwYWw6IChlbWFpbDogc3RyaW5nKSA9PiBgJHtiYXNlRW1haWx9P2FsaWFzPSR7ZW1haWx9YCxcbiAgICAgIGF1dGhvcml6ZU9yZGVyOiAoc2VsbGVyOiBzdHJpbmcsIHRyYW5zYWN0aW9uSWQ6IHN0cmluZykgPT5cbiAgICAgICAgYGh0dHBzOi8vJHtzZWxsZXJ9JHtiYXNlVHhXTH0ke3RyYW5zYWN0aW9uSWR9L2F1dGhvcml6YXRpb24tcmVxdWVzdGAsXG4gICAgICBnYXRld2F5Q2FsbGJhY2s6IChvcmRlckdyb3VwOiBzdHJpbmcpID0+XG4gICAgICAgIGAke2dhdGV3YXlDYWxsYmFja30ke29yZGVyR3JvdXB9YCxcbiAgICAgIHNlYXJjaEFkZHJlc3M6IChzZWxsZXJJZDogc3RyaW5nKSA9PlxuICAgICAgICBgaHR0cHM6Ly8ke3NlbGxlcklkfSR7ZGVsZXRlQWRyZXNzfXNlYXJjaGAsXG4gICAgICBkZWxldGVBZGRyZXNzOiAoYWRkcmVzc0lkOiBzdHJpbmcsIHNlbGxlcklkOiBzdHJpbmcpID0+XG4gICAgICAgIGBodHRwczovLyR7c2VsbGVySWR9JHtkZWxldGVBZHJlc3N9ZG9jdW1lbnRzLyR7YWRkcmVzc0lkfWAsXG4gICAgICBjYW5jZWxPcmRlcjogKG9yZGVySWQ6IHN0cmluZykgPT4gYCR7Y2FuY2VsT3JkZXJ9JHtvcmRlcklkfS9jYW5jZWxgLFxuICAgICAgZ2V0TWtldDogKCkgPT5cbiAgICAgICAgYGh0dHBzOi8vJHt0aGlzLmNvbnRleHQuYWNjb3VudH0udnRleGNvbW1lcmNlc3RhYmxlLmNvbS5iciR7Z2V0TWtldH1gLFxuICAgIH1cbiAgfVxufVxuMTJcbiJdfQ==