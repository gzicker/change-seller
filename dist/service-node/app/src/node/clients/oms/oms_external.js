"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OmsExternal = void 0;
const api_1 = require("@vtex/api");
const request_keys_1 = require("../utils/request_keys");
//import { getRequestConfigKey } from '../utils/request_keys'
const baseURL = '/api/oms/pvt/orders/';
const routes = {
    cancelOrder: (orderId, sellerId) => `https://${sellerId}.vtexcommercestable.com.br${baseURL}${orderId}/cancel`,
};
class OmsExternal extends api_1.ExternalClient {
    constructor(ctx, options) {
        super('', ctx, options);
    }
    async cancelOrder(orderId, sellerId) {
        try {
            const URI = routes.cancelOrder(orderId, sellerId);
            const response = await this.http.post(URI, null, request_keys_1.getRequestConfigKey(sellerId));
            if ((response === null || response === void 0 ? void 0 : response.receipt) == null) {
                const URI = routes.cancelOrder(orderId, sellerId);
                await this.http.post(URI, null, request_keys_1.getRequestConfigKey(sellerId));
            }
            return response;
        }
        catch (error) {
            console.log('Error CANCEL ORDER ..', error.response);
            return error;
        }
    }
}
exports.OmsExternal = OmsExternal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21zX2V4dGVybmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvY2xpZW50cy9vbXMvb21zX2V4dGVybmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUlrQjtBQUNsQix3REFBMkQ7QUFFM0QsNkRBQTZEO0FBRzdELE1BQU0sT0FBTyxHQUFHLHNCQUFzQixDQUFBO0FBRXRDLE1BQU0sTUFBTSxHQUFHO0lBQ2IsV0FBVyxFQUFFLENBQUMsT0FBZSxFQUFHLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsUUFBUSw2QkFBNkIsT0FBTyxHQUFHLE9BQU8sU0FBUztDQUNoSSxDQUFBO0FBRUQsTUFBYSxXQUFZLFNBQVEsb0JBQWM7SUFDN0MsWUFBWSxHQUFjLEVBQUcsT0FBeUI7UUFDcEQsS0FBSyxDQUFDLEVBQUUsRUFBRyxHQUFHLEVBQUcsT0FBTyxDQUFDLENBQUE7SUFFM0IsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQ3RCLE9BQWUsRUFDZixRQUFnQjtRQUVoQixJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUcsUUFBUSxDQUFDLENBQUE7WUFDbEQsTUFBTSxRQUFRLEdBQVEsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGtDQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFFcEYsSUFBSSxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxPQUFPLEtBQUksSUFBSSxFQUFFO2dCQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRyxRQUFRLENBQUMsQ0FBQTtnQkFFbEQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFHLGtDQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7YUFDL0Q7WUFDRCxPQUFPLFFBQVEsQ0FBQTtTQUNoQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFcEQsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7Q0FBQztBQXpCSixrQ0F5QkkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFeHRlcm5hbENsaWVudCxcbiAgSW5zdGFuY2VPcHRpb25zLFxuICBJT0NvbnRleHQsXG59IGZyb20gJ0B2dGV4L2FwaSdcbmltcG9ydCB7IGdldFJlcXVlc3RDb25maWdLZXkgfSBmcm9tICcuLi91dGlscy9yZXF1ZXN0X2tleXMnXG5cbi8vaW1wb3J0IHsgZ2V0UmVxdWVzdENvbmZpZ0tleSB9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3Rfa2V5cydcblxuXG5jb25zdCBiYXNlVVJMID0gJy9hcGkvb21zL3B2dC9vcmRlcnMvJ1xuXG5jb25zdCByb3V0ZXMgPSB7XG4gIGNhbmNlbE9yZGVyOiAob3JkZXJJZDogU3RyaW5nICwgc2VsbGVySWQ6IFN0cmluZykgPT4gYGh0dHBzOi8vJHtzZWxsZXJJZH0udnRleGNvbW1lcmNlc3RhYmxlLmNvbS5iciR7YmFzZVVSTH0ke29yZGVySWR9L2NhbmNlbGAsXG59XG5cbmV4cG9ydCBjbGFzcyBPbXNFeHRlcm5hbCBleHRlbmRzIEV4dGVybmFsQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoY3R4OiBJT0NvbnRleHQsICBvcHRpb25zPzogSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoJycgLCBjdHggLCBvcHRpb25zKVxuXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY2FuY2VsT3JkZXIoXG4gICAgb3JkZXJJZDogU3RyaW5nLFxuICAgIHNlbGxlcklkOiBTdHJpbmdcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFVSSSA9IHJvdXRlcy5jYW5jZWxPcmRlcihvcmRlcklkICwgc2VsbGVySWQpXG4gICAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoVVJJLCBudWxsICxnZXRSZXF1ZXN0Q29uZmlnS2V5KHNlbGxlcklkKSlcblxuICAgICAgaWYgKHJlc3BvbnNlPy5yZWNlaXB0ID09IG51bGwpIHtcbiAgICAgICAgY29uc3QgVVJJID0gcm91dGVzLmNhbmNlbE9yZGVyKG9yZGVySWQgLCBzZWxsZXJJZClcblxuICAgICAgICBhd2FpdCB0aGlzLmh0dHAucG9zdChVUkksbnVsbCAsIGdldFJlcXVlc3RDb25maWdLZXkoc2VsbGVySWQpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBDQU5DRUwgT1JERVIgLi4nLCBlcnJvci5yZXNwb25zZSlcblxuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuICB9fVxuIl19