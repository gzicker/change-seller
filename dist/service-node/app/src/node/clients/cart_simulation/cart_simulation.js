"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSimulationClient = void 0;
const api_1 = require("@vtex/api");
const utils_1 = require("../../utils");
const constants_1 = require("../../utils/constants");
class CartSimulationClient extends api_1.JanusClient {
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
                    : {
                        VtexIdclientAutCookie: ctx.authToken,
                        'Proxy-Authorization': ctx.authToken,
                    }),
                'x-vtex-user-agent': ctx.userAgent,
                'X-VTEX-Use-Https': 'true',
            },
        });
        this.get = (url, config = {}) => {
            return this.http.get(url, config).catch(utils_1.statusToError);
        };
        this.post = (url, data, config = {}) => {
            return this.http
                .post(url, data, config)
                .catch(utils_1.statusToError);
        };
    }
    /**
     * getSKU
     */
    async getSKU(id) {
        const response = this.http.get(this.routes.getSKU(id));
        return response;
    }
    /**
     * simulateOrder
     */
    async simulateOrder(data) {
        const items = [];
        data.items.forEach((element) => items.push(values(element)));
        function values(element) {
            var item = {
                id: element.id,
                quantity: element.quantity,
                seller: data.seller,
            };
            return item;
        }
        const geoCoordinates = [];
        if (data.geoCoordinates != null) {
            var arrayDeCadenas = data.geoCoordinates.split(',');
            arrayDeCadenas.forEach((element) => {
                let a = element.replace('[', '');
                a = a.replace(']', '');
                geoCoordinates.push(a);
            });
        }
        const request = {
            items: items,
            postalCode: data.postalCode,
            geoCoordinates: geoCoordinates,
            country: data.country,
        };
        const mket = await this.getMket();
        const URI = this.routes.simulator(mket);
        const response = this.http.post(URI, request, {
            params: { an: constants_1.AmbientePpal },
        });
        const list = [];
        (await response).items.forEach((element) => {
            const sku = this.getSKU(element.id);
            if (element.availability == 'available') {
                let sellingPrice = 0;
                if ((element === null || element === void 0 ? void 0 : element.sellingPrice) == null) {
                    sellingPrice = element === null || element === void 0 ? void 0 : element.price;
                }
                else {
                    sellingPrice = element === null || element === void 0 ? void 0 : element.sellingPrice;
                }
                let attachments = '[]';
                data.items.forEach((element2) => {
                    if (element2.id == element.id) {
                        attachments = element2.attachments;
                    }
                });
                var item = {
                    id: element.id,
                    quantity: element.quantity,
                    price: element === null || element === void 0 ? void 0 : element.price,
                    sellingPrice: sellingPrice,
                    seller: data.seller,
                    name: sku.then((val) => val.NameComplete),
                    ean: sku.then((val) => val.AlternateIds.Ean),
                    priceTags: element.priceTags,
                    attachments: attachments,
                };
                list.push(item);
            }
        });
        const rta = {
            items: list,
            paymentData: (await response).paymentData,
            postalCode: (await response).postalCode,
            country: (await response).country,
            messages: (await response).messages,
            logisticsInfo: (await response).logisticsInfo,
            purchaseConditions: (await response).purchaseConditions,
            totals: (await response).totals,
        };
        return rta;
    }
    /**
     * getClientProfile
     */
    async getMket() {
        try {
            const URI = this.routes.getMket();
            const response = await this.get(URI);
            if (response === null || response === void 0 ? void 0 : response.haveParentAccount) {
                return response === null || response === void 0 ? void 0 : response.parentAccountName;
            }
            else {
                return response === null || response === void 0 ? void 0 : response.accountName;
            }
        }
        catch (error) {
            console.info(error);
            return constants_1.AmbientePpal;
        }
    }
    get routes() {
        const base = '.vtexcommercestable.com.br/api/checkout/pub/orderForms/simulation';
        const baseSku = '/api/catalog_system/pvt/sku/';
        const getMket = '/api/vlm/account';
        return {
            simulator: (mket) => `https://${mket}${base}`,
            getSKU: (sku) => `${baseSku}stockkeepingunitbyid/${sku}`,
            getMket: () => `https://${this.context.account}.vtexcommercestable.com.br${getMket}`,
        };
    }
}
exports.CartSimulationClient = CartSimulationClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydF9zaW11bGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvY2xpZW50cy9jYXJ0X3NpbXVsYXRpb24vY2FydF9zaW11bGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLG1DQUF1QztBQUd2Qyx1Q0FBMkM7QUFDM0MscURBQW9EO0FBR3BELE1BQWEsb0JBQXFCLFNBQVEsaUJBQVc7SUFDbkQsWUFBbUIsR0FBYyxFQUFFLE9BQXlCO1FBQzFELEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVCxHQUFHLE9BQU87WUFDVixPQUFPLEVBQUU7Z0JBQ1AsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtvQkFDeEIsQ0FBQyxDQUFDO3dCQUNFLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxrQkFBa0I7d0JBQzdDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxrQkFBa0I7cUJBQzlDO29CQUNILENBQUMsQ0FBQzt3QkFDRSxxQkFBcUIsRUFBRSxHQUFHLENBQUMsU0FBUzt3QkFDcEMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLFNBQVM7cUJBQ3JDLENBQUM7Z0JBQ04sbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFNBQVM7Z0JBQ2xDLGtCQUFrQixFQUFFLE1BQU07YUFDM0I7U0FDRixDQUFDLENBQUE7UUEwR00sUUFBRyxHQUFHLENBQUksR0FBVyxFQUFFLFNBQXdCLEVBQUUsRUFBRSxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBYSxDQUFlLENBQUE7UUFDekUsQ0FBQyxDQUFBO1FBRVMsU0FBSSxHQUFHLENBQUksR0FBVyxFQUFFLElBQVUsRUFBRSxTQUF3QixFQUFFLEVBQUUsRUFBRTtZQUMxRSxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNiLElBQUksQ0FBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztpQkFDMUIsS0FBSyxDQUFDLHFCQUFhLENBQWUsQ0FBQTtRQUN2QyxDQUFDLENBQUE7SUFqSEQsQ0FBQztJQUtEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFVO1FBQzVCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEQsT0FBTyxRQUFRLENBQUE7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFvQjtRQUM3QyxNQUFNLEtBQUssR0FBdUQsRUFBRSxDQUFBO1FBQ3BFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUQsU0FBUyxNQUFNLENBQUMsT0FBYztZQUM1QixJQUFJLElBQUksR0FBRztnQkFDVCxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7Z0JBQ2QsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUMxQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQTtZQUNELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQztRQUVELE1BQU0sY0FBYyxHQUFhLEVBQUUsQ0FBQTtRQUNuQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO1lBQy9CLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRW5ELGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUcsRUFBRSxDQUFDLENBQUE7Z0JBQ2pDLENBQUMsR0FBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDckIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN4QixDQUFDLENBQUMsQ0FBQTtTQUNIO1FBQ0QsTUFBTSxPQUFPLEdBQUc7WUFDZCxLQUFLLEVBQUUsS0FBSztZQUNaLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixjQUFjLEVBQUUsY0FBYztZQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQTtRQUVELE1BQU0sSUFBSSxHQUFRLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3RDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLE1BQU0sUUFBUSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDakQsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLHdCQUFZLEVBQUU7U0FDN0IsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxJQUFJLEdBUUosRUFBRSxDQUVQO1FBQUEsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtZQUMvQyxNQUFNLEdBQUcsR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUN4QyxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksV0FBVyxFQUFFO2dCQUN2QyxJQUFJLFlBQVksR0FBVyxDQUFDLENBQUE7Z0JBQzVCLElBQUksQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsWUFBWSxLQUFJLElBQUksRUFBRTtvQkFDakMsWUFBWSxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxLQUFLLENBQUE7aUJBQzlCO3FCQUFNO29CQUNMLFlBQVksR0FBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsWUFBWSxDQUFBO2lCQUNyQztnQkFFRCxJQUFJLFdBQVcsR0FBUSxJQUFJLENBQUE7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQzlCLElBQUksUUFBUSxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO3dCQUM3QixXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQTtxQkFDbkM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsSUFBSSxJQUFJLEdBQUc7b0JBQ1QsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO29CQUNkLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtvQkFDMUIsS0FBSyxFQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxLQUFLO29CQUNyQixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQTBCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7b0JBQ2hFLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBMEIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7b0JBQ25FLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztvQkFDNUIsV0FBVyxFQUFFLFdBQVc7aUJBQ3pCLENBQUE7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNoQjtRQUNILENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxHQUFHLEdBQUc7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxDQUFDLE1BQU0sUUFBUSxDQUFDLENBQUMsV0FBVztZQUN6QyxVQUFVLEVBQUUsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxDQUFDLFVBQVU7WUFDdkMsT0FBTyxFQUFFLENBQUMsTUFBTSxRQUFRLENBQUMsQ0FBQyxPQUFPO1lBQ2pDLFFBQVEsRUFBRSxDQUFDLE1BQU0sUUFBUSxDQUFDLENBQUMsUUFBUTtZQUNuQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxDQUFDLGFBQWE7WUFDN0Msa0JBQWtCLEVBQUUsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQjtZQUN2RCxNQUFNLEVBQUUsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxDQUFDLE1BQU07U0FDaEMsQ0FBQTtRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQWFEOztPQUVHO0lBQ0ssS0FBSyxDQUFDLE9BQU87UUFDbkIsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDakMsTUFBTSxRQUFRLEdBQVEsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3pDLElBQUcsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLGlCQUFpQixFQUFDO2dCQUM3QixPQUFPLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxpQkFBaUIsQ0FBQTthQUVuQztpQkFBSTtnQkFDSCxPQUFPLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxXQUFXLENBQUE7YUFFN0I7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQixPQUFPLHdCQUFZLENBQUE7U0FDcEI7SUFDSCxDQUFDO0lBRUQsSUFBWSxNQUFNO1FBQ2hCLE1BQU0sSUFBSSxHQUNSLG1FQUFtRSxDQUFBO1FBQ3JFLE1BQU0sT0FBTyxHQUFHLDhCQUE4QixDQUFBO1FBQzlDLE1BQU0sT0FBTyxHQUFHLGtCQUFrQixDQUFBO1FBR2xDLE9BQU87WUFDTCxTQUFTLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLFdBQVcsSUFBSSxHQUFHLElBQUksRUFBRTtZQUNyRCxNQUFNLEVBQUUsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyx3QkFBd0IsR0FBRyxFQUFFO1lBQ2hFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDZCxXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyw2QkFBNkIsT0FBTyxFQUFFO1NBRXRFLENBQUE7SUFDSCxDQUFDO0NBQ0Y7QUExS0Qsb0RBMEtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBJbnN0YW5jZU9wdGlvbnMsXG4gIElPQ29udGV4dCxcbiAgUmVxdWVzdENvbmZpZyxcbn0gZnJvbSAnQHZ0ZXgvYXBpJ1xuaW1wb3J0IHsgSmFudXNDbGllbnQgfSBmcm9tICdAdnRleC9hcGknXG5cblxuaW1wb3J0IHsgc3RhdHVzVG9FcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgQW1iaWVudGVQcGFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBDYXJ0U2ltdWxhdGlvbiwgSXRlbXMgfSBmcm9tICcuLi8uLi90eXBpbmdzL2NhcnRfc2ltdWxhdGlvbidcblxuZXhwb3J0IGNsYXNzIENhcnRTaW11bGF0aW9uQ2xpZW50IGV4dGVuZHMgSmFudXNDbGllbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IoY3R4OiBJT0NvbnRleHQsIG9wdGlvbnM/OiBJbnN0YW5jZU9wdGlvbnMpIHtcbiAgICBzdXBlcihjdHgsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycyksXG4gICAgICAgIC4uLihjdHguYWRtaW5Vc2VyQXV0aFRva2VuXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIFZ0ZXhJZGNsaWVudEF1dENvb2tpZTogY3R4LmFkbWluVXNlckF1dGhUb2tlbixcbiAgICAgICAgICAgICAgJ1Byb3h5LUF1dGhvcml6YXRpb24nOiBjdHguYWRtaW5Vc2VyQXV0aFRva2VuLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBWdGV4SWRjbGllbnRBdXRDb29raWU6IGN0eC5hdXRoVG9rZW4sXG4gICAgICAgICAgICAgICdQcm94eS1BdXRob3JpemF0aW9uJzogY3R4LmF1dGhUb2tlbixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAneC12dGV4LXVzZXItYWdlbnQnOiBjdHgudXNlckFnZW50LFxuICAgICAgICAnWC1WVEVYLVVzZS1IdHRwcyc6ICd0cnVlJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG5cblxuXG4gIC8qKlxuICAgKiBnZXRTS1VcbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRTS1UoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5odHRwLmdldCh0aGlzLnJvdXRlcy5nZXRTS1UoaWQpKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgLyoqXG4gICAqIHNpbXVsYXRlT3JkZXJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBzaW11bGF0ZU9yZGVyKGRhdGE6IENhcnRTaW11bGF0aW9uKSB7XG4gICAgY29uc3QgaXRlbXM6IHsgaWQ6IHN0cmluZzsgcXVhbnRpdHk6IG51bWJlcjsgc2VsbGVyOiBzdHJpbmcgfVtdID0gW11cbiAgICBkYXRhLml0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IGl0ZW1zLnB1c2godmFsdWVzKGVsZW1lbnQpKSlcbiAgICBmdW5jdGlvbiB2YWx1ZXMoZWxlbWVudDogSXRlbXMpIHtcbiAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgICAgcXVhbnRpdHk6IGVsZW1lbnQucXVhbnRpdHksXG4gICAgICAgIHNlbGxlcjogZGF0YS5zZWxsZXIsXG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbVxuICAgIH1cblxuICAgIGNvbnN0IGdlb0Nvb3JkaW5hdGVzOiBzdHJpbmdbXSA9IFtdXG4gICAgaWYgKGRhdGEuZ2VvQ29vcmRpbmF0ZXMgIT0gbnVsbCkge1xuICAgICAgdmFyIGFycmF5RGVDYWRlbmFzID0gZGF0YS5nZW9Db29yZGluYXRlcy5zcGxpdCgnLCcpXG5cbiAgICAgIGFycmF5RGVDYWRlbmFzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGEgPSBlbGVtZW50LnJlcGxhY2UoJ1snICwgJycpXG4gICAgICAgIGE9IGEucmVwbGFjZSgnXScsICcnKVxuICAgICAgICBnZW9Db29yZGluYXRlcy5wdXNoKGEpXG4gICAgICB9KVxuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0ID0ge1xuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgcG9zdGFsQ29kZTogZGF0YS5wb3N0YWxDb2RlLFxuICAgICAgZ2VvQ29vcmRpbmF0ZXM6IGdlb0Nvb3JkaW5hdGVzLFxuICAgICAgY291bnRyeTogZGF0YS5jb3VudHJ5LFxuICAgIH1cblxuICAgIGNvbnN0IG1rZXQ6IGFueSA9IGF3YWl0IHRoaXMuZ2V0TWtldCgpXG4gICAgY29uc3QgVVJJID0gdGhpcy5yb3V0ZXMuc2ltdWxhdG9yKG1rZXQpXG4gICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IHRoaXMuaHR0cC5wb3N0KFVSSSwgcmVxdWVzdCwge1xuICAgICAgcGFyYW1zOiB7IGFuOiBBbWJpZW50ZVBwYWwgfSxcbiAgICB9KVxuICAgIGNvbnN0IGxpc3Q6IHtcbiAgICAgIGlkOiBzdHJpbmdcbiAgICAgIHF1YW50aXR5OiBudW1iZXJcbiAgICAgIHNlbGxlcjogc3RyaW5nXG4gICAgICBwcmljZTogbnVtYmVyXG4gICAgICBlYW46IHN0cmluZ1xuICAgICAgbmFtZTogc3RyaW5nXG4gICAgICBwcmljZVRhZ3M6IGFueVxuICAgIH1bXSA9IFtdXG5cbiAgICA7KGF3YWl0IHJlc3BvbnNlKS5pdGVtcy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHNrdTogYW55ID0gdGhpcy5nZXRTS1UoZWxlbWVudC5pZClcbiAgICAgIGlmIChlbGVtZW50LmF2YWlsYWJpbGl0eSA9PSAnYXZhaWxhYmxlJykge1xuICAgICAgICBsZXQgc2VsbGluZ1ByaWNlOiBudW1iZXIgPSAwXG4gICAgICAgIGlmIChlbGVtZW50Py5zZWxsaW5nUHJpY2UgPT0gbnVsbCkge1xuICAgICAgICAgIHNlbGxpbmdQcmljZSA9IGVsZW1lbnQ/LnByaWNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsbGluZ1ByaWNlID0gZWxlbWVudD8uc2VsbGluZ1ByaWNlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXR0YWNobWVudHM6IGFueSA9ICdbXSdcbiAgICAgICAgZGF0YS5pdGVtcy5mb3JFYWNoKChlbGVtZW50MikgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50Mi5pZCA9PSBlbGVtZW50LmlkKSB7XG4gICAgICAgICAgICBhdHRhY2htZW50cyA9IGVsZW1lbnQyLmF0dGFjaG1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgIGlkOiBlbGVtZW50LmlkLFxuICAgICAgICAgIHF1YW50aXR5OiBlbGVtZW50LnF1YW50aXR5LFxuICAgICAgICAgIHByaWNlOiBlbGVtZW50Py5wcmljZSxcbiAgICAgICAgICBzZWxsaW5nUHJpY2U6IHNlbGxpbmdQcmljZSxcbiAgICAgICAgICBzZWxsZXI6IGRhdGEuc2VsbGVyLFxuICAgICAgICAgIG5hbWU6IHNrdS50aGVuKCh2YWw6IHsgTmFtZUNvbXBsZXRlOiBhbnkgfSkgPT4gdmFsLk5hbWVDb21wbGV0ZSksXG4gICAgICAgICAgZWFuOiBza3UudGhlbigodmFsOiB7IEFsdGVybmF0ZUlkczogYW55IH0pID0+IHZhbC5BbHRlcm5hdGVJZHMuRWFuKSxcbiAgICAgICAgICBwcmljZVRhZ3M6IGVsZW1lbnQucHJpY2VUYWdzLFxuICAgICAgICAgIGF0dGFjaG1lbnRzOiBhdHRhY2htZW50cyxcbiAgICAgICAgfVxuICAgICAgICBsaXN0LnB1c2goaXRlbSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgcnRhID0ge1xuICAgICAgaXRlbXM6IGxpc3QsXG4gICAgICBwYXltZW50RGF0YTogKGF3YWl0IHJlc3BvbnNlKS5wYXltZW50RGF0YSxcbiAgICAgIHBvc3RhbENvZGU6IChhd2FpdCByZXNwb25zZSkucG9zdGFsQ29kZSxcbiAgICAgIGNvdW50cnk6IChhd2FpdCByZXNwb25zZSkuY291bnRyeSxcbiAgICAgIG1lc3NhZ2VzOiAoYXdhaXQgcmVzcG9uc2UpLm1lc3NhZ2VzLFxuICAgICAgbG9naXN0aWNzSW5mbzogKGF3YWl0IHJlc3BvbnNlKS5sb2dpc3RpY3NJbmZvLFxuICAgICAgcHVyY2hhc2VDb25kaXRpb25zOiAoYXdhaXQgcmVzcG9uc2UpLnB1cmNoYXNlQ29uZGl0aW9ucyxcbiAgICAgIHRvdGFsczogKGF3YWl0IHJlc3BvbnNlKS50b3RhbHMsXG4gICAgfVxuICAgIHJldHVybiBydGFcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgPSA8VD4odXJsOiBzdHJpbmcsIGNvbmZpZzogUmVxdWVzdENvbmZpZyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4odXJsLCBjb25maWcpLmNhdGNoKHN0YXR1c1RvRXJyb3IpIGFzIFByb21pc2U8VD5cbiAgfVxuXG4gIHByb3RlY3RlZCBwb3N0ID0gPFQ+KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBjb25maWc6IFJlcXVlc3RDb25maWcgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PFQ+KHVybCwgZGF0YSwgY29uZmlnKVxuICAgICAgLmNhdGNoKHN0YXR1c1RvRXJyb3IpIGFzIFByb21pc2U8VD5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIGdldENsaWVudFByb2ZpbGVcbiAgICovXG4gICBwdWJsaWMgYXN5bmMgZ2V0TWtldCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgVVJJID0gdGhpcy5yb3V0ZXMuZ2V0TWtldCgpXG4gICAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgdGhpcy5nZXQoVVJJKVxuICAgICAgaWYocmVzcG9uc2U/LmhhdmVQYXJlbnRBY2NvdW50KXtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlPy5wYXJlbnRBY2NvdW50TmFtZVxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlPy5hY2NvdW50TmFtZVxuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhlcnJvcilcbiAgICAgIHJldHVybiBBbWJpZW50ZVBwYWxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCByb3V0ZXMoKSB7XG4gICAgY29uc3QgYmFzZSA9XG4gICAgICAnLnZ0ZXhjb21tZXJjZXN0YWJsZS5jb20uYnIvYXBpL2NoZWNrb3V0L3B1Yi9vcmRlckZvcm1zL3NpbXVsYXRpb24nXG4gICAgY29uc3QgYmFzZVNrdSA9ICcvYXBpL2NhdGFsb2dfc3lzdGVtL3B2dC9za3UvJ1xuICAgIGNvbnN0IGdldE1rZXQgPSAnL2FwaS92bG0vYWNjb3VudCdcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNpbXVsYXRvcjogKG1rZXQ6IHN0cmluZykgPT4gYGh0dHBzOi8vJHtta2V0fSR7YmFzZX1gLFxuICAgICAgZ2V0U0tVOiAoc2t1OiBzdHJpbmcpID0+IGAke2Jhc2VTa3V9c3RvY2trZWVwaW5ndW5pdGJ5aWQvJHtza3V9YCxcbiAgICAgIGdldE1rZXQ6ICgpID0+XG4gICAgICBgaHR0cHM6Ly8ke3RoaXMuY29udGV4dC5hY2NvdW50fS52dGV4Y29tbWVyY2VzdGFibGUuY29tLmJyJHtnZXRNa2V0fWAsXG5cbiAgICB9XG4gIH1cbn1cbiJdfQ==