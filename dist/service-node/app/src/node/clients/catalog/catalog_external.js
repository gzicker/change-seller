"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogExternal = void 0;
const api_1 = require("@vtex/api");
const request_keys_1 = require("../utils/request_keys");
const baseURL = '.vtexcommercestable.com.br/api/catalog_system';
const routes = {
    getSkuById: (skuId, market) => `https://${market}${baseURL}/pvt/sku/stockkeepingunitbyid/${skuId}`,
};
class CatalogExternal extends api_1.ExternalClient {
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
    async getSkuById(skuId, market) {
        try {
            const URI = routes.getSkuById(skuId, market);
            const response = await this.http.get(URI, request_keys_1.getRequestConfigKey(market));
            return response;
        }
        catch (error) {
            return error;
        }
    }
}
exports.CatalogExternal = CatalogExternal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZ19leHRlcm5hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9ub2RlL2NsaWVudHMvY2F0YWxvZy9jYXRhbG9nX2V4dGVybmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUlrQjtBQUVsQix3REFBMkQ7QUFHM0QsTUFBTSxPQUFPLEdBQUcsK0NBQStDLENBQUE7QUFFL0QsTUFBTSxNQUFNLEdBQUc7SUFFYixVQUFVLEVBQUUsQ0FBQyxLQUFhLEVBQUcsTUFBYyxFQUFFLEVBQUUsQ0FBQyxXQUFXLE1BQU0sR0FBRyxPQUFPLGlDQUFpQyxLQUFLLEVBQUU7Q0FDbkgsQ0FBQTtBQUVGLE1BQWEsZUFBZ0IsU0FBUSxvQkFBYztJQUNqRCxZQUFZLEdBQWMsRUFBRSxPQUF5Qjs7UUFDbkQsS0FBSyxDQUFHLEVBQUUsRUFDVixHQUFHLEVBQ0g7WUFDRSxHQUFHLENBQUMsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksRUFBRSxDQUFDO1lBQ2xCLE9BQU8sRUFBRTtnQkFDUCxHQUFHLE9BQUMsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE9BQU8sbUNBQUksRUFBRSxDQUFDO2dCQUMzQixrQkFBa0IsRUFBRSxNQUFNO2FBQzNCO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUFVLENBQ3JCLEtBQWEsRUFDYixNQUFjO1FBRWQsSUFBSTtZQUVGLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFHLE1BQU0sQ0FBQyxDQUFBO1lBQzdDLE1BQU0sUUFBUSxHQUFRLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFHLGtDQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7WUFDNUUsT0FBTyxRQUFRLENBQUE7U0FDaEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDO0NBQUM7QUF6QkosMENBeUJJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRXh0ZXJuYWxDbGllbnQsXG4gIEluc3RhbmNlT3B0aW9ucyxcbiAgSU9Db250ZXh0LFxufSBmcm9tICdAdnRleC9hcGknXG5cbmltcG9ydCB7IGdldFJlcXVlc3RDb25maWdLZXkgfSBmcm9tICcuLi91dGlscy9yZXF1ZXN0X2tleXMnXG5cblxuY29uc3QgYmFzZVVSTCA9ICcudnRleGNvbW1lcmNlc3RhYmxlLmNvbS5ici9hcGkvY2F0YWxvZ19zeXN0ZW0nXG5cbmNvbnN0IHJvdXRlcyA9IHtcblxuICBnZXRTa3VCeUlkOiAoc2t1SWQ6IFN0cmluZyAsIG1hcmtldDogU3RyaW5nKSA9PiBgaHR0cHM6Ly8ke21hcmtldH0ke2Jhc2VVUkx9L3B2dC9za3Uvc3RvY2trZWVwaW5ndW5pdGJ5aWQvJHtza3VJZH1gLFxuIH1cblxuZXhwb3J0IGNsYXNzIENhdGFsb2dFeHRlcm5hbCBleHRlbmRzIEV4dGVybmFsQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoY3R4OiBJT0NvbnRleHQsIG9wdGlvbnM/OiBJbnN0YW5jZU9wdGlvbnMpIHtcbiAgICBzdXBlciggIGBgLFxuICAgIGN0eCxcbiAgICB7XG4gICAgICAuLi4ob3B0aW9ucyA/PyB7fSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLihvcHRpb25zPy5oZWFkZXJzID8/IHt9KSxcbiAgICAgICAgJ1gtVnRleC1Vc2UtSHR0cHMnOiAndHJ1ZScsXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0U2t1QnlJZChcbiAgICBza3VJZDogU3RyaW5nLFxuICAgIG1hcmtldDogU3RyaW5nXG4gICkge1xuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IFVSSSA9IHJvdXRlcy5nZXRTa3VCeUlkKHNrdUlkICwgbWFya2V0KVxuICAgICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoVVJJICwgZ2V0UmVxdWVzdENvbmZpZ0tleShtYXJrZXQpKVxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cbiAgfX1cbiJdfQ==