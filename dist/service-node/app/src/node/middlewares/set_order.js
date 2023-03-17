"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOrder = void 0;
async function setOrder(data, responseClient) {
    try {
        /**
        *   setOrder paso 3- CREATE ORDER
        */
        let address;
        let existaddress = false;
        responseClient === null || responseClient === void 0 ? void 0 : responseClient.availableAddresses.forEach((element) => {
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
            const req = {
                value: data.value,
                allowManualPrice: true,
                clientProfileData: responseClient === null || responseClient === void 0 ? void 0 : responseClient.userProfile,
                items: data.itemsOrder,
                shippingData: {
                    address,
                    logisticsInfo: data.shippingData.logisticsInfoOrder,
                },
                paymentData: data.paymentData,
                openTextField: { value: data.coments },
                marketingData: {
                    id: 'marketingData',
                    marketingTags: [
                        'ChangeSeller',
                        'Transferencia'
                    ]
                }
            };
            return (req);
        }
        else {
            const responsePlaceOrder = {};
            responsePlaceOrder.error = {
                message: 'ESTA ORDEN YA FUE TRANSFERIDA '
            };
            return responsePlaceOrder;
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.setOrder = setOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0X29yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvbWlkZGxld2FyZXMvc2V0X29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLEtBQUssVUFBVSxRQUFRLENBQzVCLElBQVUsRUFDVixjQUFvQjtJQUVsQixJQUFJO1FBQ0o7O1VBRUU7UUFDRixJQUFJLE9BQVksQ0FBQTtRQUNoQixJQUFJLFlBQVksR0FBWSxLQUFLLENBQUE7UUFDakMsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFOztZQUMxRCxJQUFJLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFNBQVMsS0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7Z0JBQzdELE9BQU8sR0FBRztvQkFDUixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7b0JBQ2hDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWTtvQkFDbEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO29CQUM5QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7b0JBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztvQkFDcEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO29CQUN4QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07b0JBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtvQkFDdEIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZO29CQUNsQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7b0JBQzlCLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxhQUN4QixJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsWUFBWSwwQ0FBRSxPQUFPLDBDQUFFLGNBQWMsQ0FDNUM7aUJBQ0YsQ0FBQTtnQkFDRCxZQUFZLEdBQUcsSUFBSSxDQUFBO2FBQ3BCO1FBQ0gsQ0FBQyxFQUFDO1FBQ0YsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxHQUFHLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixpQkFBaUIsRUFBRSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsV0FBVztnQkFDOUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUN0QixZQUFZLEVBQUU7b0JBQ1osT0FBTztvQkFDUCxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0I7aUJBQ3BEO2dCQUNELFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDN0IsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RDLGFBQWEsRUFBRTtvQkFDYixFQUFFLEVBQUUsZUFBZTtvQkFDbkIsYUFBYSxFQUFFO3dCQUNiLGNBQWM7d0JBQ2QsZUFBZTtxQkFDaEI7aUJBQ0Y7YUFDRixDQUFBO1lBRUYsT0FBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ1g7YUFBTTtZQUNMLE1BQU0sa0JBQWtCLEdBQVEsRUFBRSxDQUFBO1lBQ2xDLGtCQUFrQixDQUFDLEtBQUssR0FBRztnQkFDekIsT0FBTyxFQUNMLGdDQUFnQzthQUNuQyxDQUFBO1lBQ0QsT0FBTyxrQkFBa0IsQ0FBQTtTQUMxQjtLQUNBO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ25CO0FBR0wsQ0FBQztBQWpFRCw0QkFpRUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0T3JkZXIoXG4gIGRhdGEgOiBhbnkgLFxuICByZXNwb25zZUNsaWVudCA6IGFueSAsXG4gICkge1xuICAgIHRyeSB7XG4gICAgLyoqXG4gICAgKiAgIHNldE9yZGVyIHBhc28gMy0gQ1JFQVRFIE9SREVSXG4gICAgKi9cbiAgICBsZXQgYWRkcmVzczogYW55XG4gICAgbGV0IGV4aXN0YWRkcmVzczogYm9vbGVhbiA9IGZhbHNlXG4gICAgcmVzcG9uc2VDbGllbnQ/LmF2YWlsYWJsZUFkZHJlc3Nlcy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Py5hZGRyZXNzSWQgPT0gZGF0YS5zaGlwcGluZ0RhdGEuYWRkcmVzcy5hZGRyZXNzSWQpIHtcbiAgICAgICAgYWRkcmVzcyA9IHtcbiAgICAgICAgICBhZGRyZXNzVHlwZTogZWxlbWVudC5hZGRyZXNzVHlwZSxcbiAgICAgICAgICByZWNlaXZlck5hbWU6IGVsZW1lbnQucmVjZWl2ZXJOYW1lLFxuICAgICAgICAgIHBvc3RhbENvZGU6IGVsZW1lbnQucG9zdGFsQ29kZSxcbiAgICAgICAgICBjaXR5OiBlbGVtZW50LmNpdHksXG4gICAgICAgICAgc3RhdGU6IGVsZW1lbnQuc3RhdGUsXG4gICAgICAgICAgY291bnRyeTogZWxlbWVudC5jb3VudHJ5LFxuICAgICAgICAgIHN0cmVldDogZWxlbWVudC5zdHJlZXQsXG4gICAgICAgICAgbnVtYmVyOiBlbGVtZW50Lm51bWJlcixcbiAgICAgICAgICBuZWlnaGJvcmhvb2Q6IGVsZW1lbnQubmVpZ2hib3Job29kLFxuICAgICAgICAgIGNvbXBsZW1lbnQ6IGVsZW1lbnQuY29tcGxlbWVudCxcbiAgICAgICAgICBnZW9Db29yZGluYXRlczogSlNPTi5wYXJzZShcbiAgICAgICAgICAgIGRhdGE/LnNoaXBwaW5nRGF0YT8uYWRkcmVzcz8uZ2VvQ29vcmRpbmF0ZXNcbiAgICAgICAgICApLFxuICAgICAgICB9XG4gICAgICAgIGV4aXN0YWRkcmVzcyA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChleGlzdGFkZHJlc3MpIHtcbiAgICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgICAgdmFsdWU6IGRhdGEudmFsdWUsXG4gICAgICAgIGFsbG93TWFudWFsUHJpY2U6IHRydWUsXG4gICAgICAgIGNsaWVudFByb2ZpbGVEYXRhOiByZXNwb25zZUNsaWVudD8udXNlclByb2ZpbGUsXG4gICAgICAgIGl0ZW1zOiBkYXRhLml0ZW1zT3JkZXIsXG4gICAgICAgIHNoaXBwaW5nRGF0YToge1xuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgbG9naXN0aWNzSW5mbzogZGF0YS5zaGlwcGluZ0RhdGEubG9naXN0aWNzSW5mb09yZGVyLFxuICAgICAgICB9LFxuICAgICAgICBwYXltZW50RGF0YTogZGF0YS5wYXltZW50RGF0YSxcbiAgICAgICAgb3BlblRleHRGaWVsZDogeyB2YWx1ZTogZGF0YS5jb21lbnRzIH0sXG4gICAgICAgIG1hcmtldGluZ0RhdGE6IHtcbiAgICAgICAgICBpZDogJ21hcmtldGluZ0RhdGEnLFxuICAgICAgICAgIG1hcmtldGluZ1RhZ3M6IFtcbiAgICAgICAgICAgICdDaGFuZ2VTZWxsZXInLFxuICAgICAgICAgICAgJ1RyYW5zZmVyZW5jaWEnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgcmV0dXJuKHJlcSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzcG9uc2VQbGFjZU9yZGVyOiBhbnkgPSB7fVxuICAgICAgcmVzcG9uc2VQbGFjZU9yZGVyLmVycm9yID0ge1xuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdFU1RBIE9SREVOIFlBIEZVRSBUUkFOU0ZFUklEQSAnXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2VQbGFjZU9yZGVyXG4gICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG5cblxufVxuXG4iXX0=