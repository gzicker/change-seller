"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutExternal = void 0;
const api_1 = require("@vtex/api");
const request_keys_1 = require("../utils/request_keys");
const baseURL = '/api/checkout';
const routes = {
    orders: (market) => `https://${market}.vtexcommercestable.com.br${baseURL}/pub/orders`,
    clientProfile: (email, market) => `https://${market}.vtexcommercestable.com.br${baseURL}/pub/profiles?email=${email}`,
    simulation: (market) => `https://${market}.vtexcommercestable.com.br${baseURL}/pub/orderForms/simulation`,
};
class CheckoutExternal extends api_1.ExternalClient {
    constructor(ctx, options) {
        var _a;
        super(``, ctx, {
            ...(options !== null && options !== void 0 ? options : {}),
            headers: {
                ...((_a = options === null || options === void 0 ? void 0 : options.headers) !== null && _a !== void 0 ? _a : {}),
                'X-Vtex-Use-Https': 'true',
            },
        });
    }
    async clientProfile(email, market) {
        try {
            const URI = routes.clientProfile(email, market);
            const response = await this.http.get(URI, request_keys_1.getRequestConfigKey(market));
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async setNewOrder(order, market) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        try {
            const URI = routes.orders(market);
            const response = await this.http.put(URI, order, request_keys_1.getRequestConfigKey(market));
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
    simulation(simulation, mkt) {
        return this.http.post(routes.simulation(mkt), simulation, request_keys_1.getRequestConfigKey(mkt));
    }
}
exports.CheckoutExternal = CheckoutExternal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXRfZXh0ZXJuYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9jbGllbnRzL2NoZWNrb3V0L2NoZWNrb3V0X2V4dGVybmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUlrQjtBQUlsQix3REFBMkQ7QUFHM0QsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFBO0FBRS9CLE1BQU0sTUFBTSxHQUFHO0lBQ2IsTUFBTSxFQUFDLENBQUUsTUFBYyxFQUFFLEVBQUUsQ0FBQyxXQUFXLE1BQU0sNkJBQTZCLE9BQU8sYUFBYTtJQUM5RixhQUFhLEVBQUUsQ0FBQyxLQUFhLEVBQUcsTUFBYyxFQUFFLEVBQUUsQ0FBQyxXQUFXLE1BQU0sNkJBQTZCLE9BQU8sdUJBQXVCLEtBQUssRUFBRTtJQUN0SSxVQUFVLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLFdBQVcsTUFBTSw2QkFBNkIsT0FBTyw0QkFBNEI7Q0FDbEgsQ0FBQTtBQUVELE1BQWEsZ0JBQWlCLFNBQVEsb0JBQWM7SUFDbEQsWUFBWSxHQUFjLEVBQUUsT0FBeUI7O1FBQ25ELEtBQUssQ0FBRyxFQUFFLEVBQ1YsR0FBRyxFQUNIO1lBQ0UsR0FBRyxDQUFDLE9BQU8sYUFBUCxPQUFPLGNBQVAsT0FBTyxHQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsR0FBRyxPQUFDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxPQUFPLG1DQUFJLEVBQUUsQ0FBQztnQkFDM0Isa0JBQWtCLEVBQUUsTUFBTTthQUMzQjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxLQUFLLENBQUMsYUFBYSxDQUN4QixLQUFhLEVBQ2IsTUFBYTtRQUViLElBQUk7WUFFRixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUMvQyxNQUFNLFFBQVEsR0FBUSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRyxrQ0FBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQzVFLE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLEtBQUssQ0FBQTtTQUNiO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQ3RCLEtBQVUsRUFDVixNQUFhOztRQUViLElBQUk7WUFFRixNQUFNLEdBQUcsR0FBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2xDLE1BQU0sUUFBUSxHQUFRLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxrQ0FBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQ2xGLE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLGtCQUFrQixHQUFRLEVBQUUsQ0FBQTtZQUVsQyxJQUFJLG1CQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxRQUFRLDBDQUFFLElBQUksMENBQUUsU0FBUywwQ0FBRSxRQUFRLEtBQUksSUFBSSxFQUFFO2dCQUN0RCxrQkFBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUSwwQ0FBRSxJQUFJLDBDQUFFLFNBQVMsMENBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO29CQUNsRSxrQkFBa0IsQ0FBQyxLQUFLLEdBQUc7d0JBQ3pCLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsSUFBSTtxQkFDdkIsQ0FBQTtnQkFDSCxDQUFDLEVBQUM7Z0JBQ0Ysa0JBQWtCLENBQUMsS0FBSyxDQUFDLFVBQVUscUJBQ2pDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxRQUFRLDBDQUFFLElBQUksMENBQUUsU0FBUywwQ0FBRSxVQUFVLENBQUE7YUFDL0M7aUJBQU0sSUFBSSxhQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxRQUFRLDBDQUFFLElBQUksMENBQUUsS0FBSyxLQUFJLElBQUksRUFBRTtnQkFDL0Msa0JBQWtCLENBQUMsS0FBSyxHQUFHO29CQUN6QixPQUFPLG9CQUFFLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxRQUFRLDBDQUFFLElBQUksMENBQUUsS0FBSywwQ0FBRSxPQUFPO2lCQUMvQyxDQUFBO2FBQ0Y7aUJBQU07Z0JBQ0wsa0JBQWtCLENBQUMsS0FBSyxHQUFHO29CQUN6QixPQUFPLFFBQUUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsMENBQUUsSUFBSTtpQkFDL0IsQ0FBQTthQUNGO1lBRUQsT0FBTyxrQkFBa0IsQ0FBQTtTQUUxQjtJQUNILENBQUM7SUFFTSxVQUFVLENBQ2YsVUFBNkIsRUFDN0IsR0FBVztRQUVYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQ3RCLFVBQVUsRUFDVixrQ0FBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzdCLENBQUM7Q0FHRjtBQXpFRCw0Q0F5RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFeHRlcm5hbENsaWVudCxcbiAgSW5zdGFuY2VPcHRpb25zLFxuICBJT0NvbnRleHQsXG59IGZyb20gJ0B2dGV4L2FwaSdcbmltcG9ydCB7IFNpbXVsYXRpb25QYXlsb2FkIH0gZnJvbSAnLi4vdHlwaW5ncy9jaGVja291dCdcbmltcG9ydCB7IFNpbXVsYXRpb25PcmRlckZvcm0gfSBmcm9tICcuLi90eXBpbmdzL29yZGVyRm9ybSdcblxuaW1wb3J0IHsgZ2V0UmVxdWVzdENvbmZpZ0tleSB9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3Rfa2V5cydcblxuXG5jb25zdCBiYXNlVVJMID0gJy9hcGkvY2hlY2tvdXQnXG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgb3JkZXJzOiggbWFya2V0OiBzdHJpbmcpID0+IGBodHRwczovLyR7bWFya2V0fS52dGV4Y29tbWVyY2VzdGFibGUuY29tLmJyJHtiYXNlVVJMfS9wdWIvb3JkZXJzYCxcbiAgY2xpZW50UHJvZmlsZTogKGVtYWlsOiBzdHJpbmcgLCBtYXJrZXQ6IHN0cmluZykgPT4gYGh0dHBzOi8vJHttYXJrZXR9LnZ0ZXhjb21tZXJjZXN0YWJsZS5jb20uYnIke2Jhc2VVUkx9L3B1Yi9wcm9maWxlcz9lbWFpbD0ke2VtYWlsfWAsXG4gIHNpbXVsYXRpb246IChtYXJrZXQ6IHN0cmluZykgPT4gYGh0dHBzOi8vJHttYXJrZXR9LnZ0ZXhjb21tZXJjZXN0YWJsZS5jb20uYnIke2Jhc2VVUkx9L3B1Yi9vcmRlckZvcm1zL3NpbXVsYXRpb25gLFxufVxuXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRFeHRlcm5hbCBleHRlbmRzIEV4dGVybmFsQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoY3R4OiBJT0NvbnRleHQsIG9wdGlvbnM/OiBJbnN0YW5jZU9wdGlvbnMpIHtcbiAgICBzdXBlciggIGBgLFxuICAgIGN0eCxcbiAgICB7XG4gICAgICAuLi4ob3B0aW9ucyA/PyB7fSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLihvcHRpb25zPy5oZWFkZXJzID8/IHt9KSxcbiAgICAgICAgJ1gtVnRleC1Vc2UtSHR0cHMnOiAndHJ1ZScsXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY2xpZW50UHJvZmlsZShcbiAgICBlbWFpbDogc3RyaW5nLFxuICAgIG1hcmtldDpzdHJpbmdcbiAgKSB7XG4gICAgdHJ5IHtcblxuICAgICAgY29uc3QgVVJJID0gcm91dGVzLmNsaWVudFByb2ZpbGUoZW1haWwsIG1hcmtldClcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBhbnkgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFVSSSAsIGdldFJlcXVlc3RDb25maWdLZXkobWFya2V0KSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3JcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2V0TmV3T3JkZXIoXG4gICAgb3JkZXI6IGFueSxcbiAgICBtYXJrZXQ6c3RyaW5nXG4gICkge1xuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IFVSSSA9ICByb3V0ZXMub3JkZXJzKG1hcmtldClcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBhbnkgPSBhd2FpdCB0aGlzLmh0dHAucHV0KFVSSSAsb3JkZXIsIGdldFJlcXVlc3RDb25maWdLZXkobWFya2V0KSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCByZXNwb25zZVBsYWNlT3JkZXI6IGFueSA9IHt9XG5cbiAgICAgIGlmIChlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm9yZGVyRm9ybT8ubWVzc2FnZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm9yZGVyRm9ybT8ubWVzc2FnZXMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2VQbGFjZU9yZGVyLmVycm9yID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogZWxlbWVudD8udGV4dCxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvci50b3RhbGl6ZXJzID1cbiAgICAgICAgICBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm9yZGVyRm9ybT8udG90YWxpemVyc1xuICAgICAgfSBlbHNlIGlmIChlcnJvcj8ucmVzcG9uc2U/LmRhdGE/LmVycm9yICE9IG51bGwpIHtcbiAgICAgICAgcmVzcG9uc2VQbGFjZU9yZGVyLmVycm9yID0ge1xuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3I/Lm1lc3NhZ2UsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3BvbnNlUGxhY2VPcmRlci5lcnJvciA9IHtcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvcj8ucmVzcG9uc2U/LmRhdGEsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlUGxhY2VPcmRlclxuXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNpbXVsYXRpb24oXG4gICAgc2ltdWxhdGlvbjogU2ltdWxhdGlvblBheWxvYWQsXG4gICAgbWt0OiBzdHJpbmdcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFNpbXVsYXRpb25PcmRlckZvcm0+KFxuICAgICAgcm91dGVzLnNpbXVsYXRpb24obWt0KSxcbiAgICAgIHNpbXVsYXRpb24sXG4gICAgICBnZXRSZXF1ZXN0Q29uZmlnS2V5KG1rdCkpXG4gIH1cblxuXG59XG4iXX0=