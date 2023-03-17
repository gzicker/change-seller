"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDataClient = void 0;
const api_1 = require("@vtex/api");
const request_keys_1 = require("../utils/request_keys");
class MasterDataClient extends api_1.ExternalClient {
    constructor(ctx, options) {
        super('', ctx, options);
    }
    async getDocuments(account) {
        try {
            const URI = this.routes.payment(account);
            const response = await this.http.get(URI, request_keys_1.getRequestConfigKey(account));
            return response;
        }
        catch (error) {
            return null;
        }
    }
    async deleteAddress(addressId, sellerId) {
        var _a, _b, _c;
        try {
            const URIsearch = this.routes.searchAddress(sellerId, addressId);
            const search = await this.http.get(URIsearch, request_keys_1.getRequestConfigKey(sellerId));
            if ((_a = search === null || search === void 0 ? void 0 : search[0]) === null || _a === void 0 ? void 0 : _a.id) {
                const URI = this.routes.deleteAddress((_b = search === null || search === void 0 ? void 0 : search[0]) === null || _b === void 0 ? void 0 : _b.id, sellerId);
                await this.http.delete(URI, request_keys_1.getRequestConfigKey(sellerId));
            }
            else {
                console.log('NO EXISTE LA DIRECCIÓN');
            }
        }
        catch (error) {
            console.log('Error DELETE ..', (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data);
        }
    }
    get routes() {
        const baseURL = '.vtexcommercestable.com.br/api/dataentities';
        return {
            payment: (sellerId) => `https://${sellerId}${baseURL}/PA/search?_fields=_all`,
            searchAddress: (sellerId, addressName) => `https://${sellerId}${baseURL}/AD/search?_fields=_all&addressName=${addressName}`,
            deleteAddress: (addressId, sellerId) => `https://${sellerId}${baseURL}/AD/documents/${addressId}`,
        };
    }
}
exports.MasterDataClient = MasterDataClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyX2RhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9jbGllbnRzL21hc3Rlcl9kYXRhL21hc3Rlcl9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1DQUFzRTtBQUN0RSx3REFBMkQ7QUFFM0QsTUFBYSxnQkFBaUIsU0FBUSxvQkFBYztJQUNsRCxZQUFZLEdBQWMsRUFBRSxPQUF5QjtRQUNuRCxLQUFLLENBQUMsRUFBRSxFQUFHLEdBQUcsRUFBRyxPQUFPLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRU0sS0FBSyxDQUFDLFlBQVksQ0FBRSxPQUFlO1FBQ3hDLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUMsQ0FBQTtZQUN6QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxrQ0FBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBRSxDQUFBO1lBQ3ZFLE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQTtTQUNaO0lBQ0gsQ0FBQztJQUdNLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBaUIsRUFBRSxRQUFnQjs7UUFDNUQsSUFBSTtZQUNGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRyxTQUFTLENBQUMsQ0FBQTtZQUNqRSxNQUFNLE1BQU0sR0FBUSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxrQ0FBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBRSxDQUFBO1lBQ2xGLFVBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFHLENBQUMsMkNBQUcsRUFBRSxFQUFFO2dCQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsT0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUcsQ0FBQywyQ0FBRyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ2hFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGtDQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7YUFDM0Q7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO2FBQ3RDO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLFFBQUUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsMENBQUUsSUFBSSxDQUFDLENBQUE7U0FDdEQ7SUFDSCxDQUFDO0lBR0QsSUFBWSxNQUFNO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLDZDQUE2QyxDQUFBO1FBRTdELE9BQU87WUFDTCxPQUFPLEVBQUUsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FDNUIsV0FBVyxRQUFRLEdBQUcsT0FBTyx5QkFBeUI7WUFDeEQsYUFBYSxFQUFFLENBQUMsUUFBZ0IsRUFBRyxXQUFtQixFQUFFLEVBQUUsQ0FDeEQsV0FBVyxRQUFRLEdBQUcsT0FBTyx1Q0FBdUMsV0FBVyxFQUFFO1lBQ25GLGFBQWEsRUFBRSxDQUFDLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLENBQ3JELFdBQVcsUUFBUSxHQUFHLE9BQU8saUJBQWlCLFNBQVMsRUFBRTtTQUM1RCxDQUFBO0lBQ0gsQ0FBQztDQUNGO0FBNUNELDRDQTRDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBFeHRlcm5hbENsaWVudCwgSW5zdGFuY2VPcHRpb25zLCBJT0NvbnRleHQgfSBmcm9tICdAdnRleC9hcGknXG5pbXBvcnQgeyBnZXRSZXF1ZXN0Q29uZmlnS2V5IH0gZnJvbSAnLi4vdXRpbHMvcmVxdWVzdF9rZXlzJ1xuXG5leHBvcnQgY2xhc3MgTWFzdGVyRGF0YUNsaWVudCBleHRlbmRzIEV4dGVybmFsQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoY3R4OiBJT0NvbnRleHQsIG9wdGlvbnM/OiBJbnN0YW5jZU9wdGlvbnMpIHtcbiAgICBzdXBlcignJyAsIGN0eCAsIG9wdGlvbnMpXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0RG9jdW1lbnRzKCBhY2NvdW50OiBTdHJpbmcgICkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBVUkkgPSB0aGlzLnJvdXRlcy5wYXltZW50IChhY2NvdW50KVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFVSSSxnZXRSZXF1ZXN0Q29uZmlnS2V5KGFjY291bnQpIClcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZUFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcsIHNlbGxlcklkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgVVJJc2VhcmNoID0gdGhpcy5yb3V0ZXMuc2VhcmNoQWRkcmVzcyhzZWxsZXJJZCAsIGFkZHJlc3NJZClcbiAgICAgIGNvbnN0IHNlYXJjaDogYW55ID0gYXdhaXQgdGhpcy5odHRwLmdldChVUklzZWFyY2gsIGdldFJlcXVlc3RDb25maWdLZXkoc2VsbGVySWQpIClcbiAgICAgIGlmIChzZWFyY2g/LlswXT8uaWQpIHtcbiAgICAgICAgY29uc3QgVVJJID0gdGhpcy5yb3V0ZXMuZGVsZXRlQWRkcmVzcyhzZWFyY2g/LlswXT8uaWQsIHNlbGxlcklkKVxuICAgICAgICBhd2FpdCB0aGlzLmh0dHAuZGVsZXRlKFVSSSwgZ2V0UmVxdWVzdENvbmZpZ0tleShzZWxsZXJJZCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTk8gRVhJU1RFIExBIERJUkVDQ0nDk04nKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgREVMRVRFIC4uJywgZXJyb3I/LnJlc3BvbnNlPy5kYXRhKVxuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXQgcm91dGVzKCkge1xuICAgIGNvbnN0IGJhc2VVUkwgPSAnLnZ0ZXhjb21tZXJjZXN0YWJsZS5jb20uYnIvYXBpL2RhdGFlbnRpdGllcydcblxuICAgIHJldHVybiB7XG4gICAgICBwYXltZW50OiAoc2VsbGVySWQ6IFN0cmluZykgPT5cbiAgICAgICAgYGh0dHBzOi8vJHtzZWxsZXJJZH0ke2Jhc2VVUkx9L1BBL3NlYXJjaD9fZmllbGRzPV9hbGxgLFxuICAgICAgc2VhcmNoQWRkcmVzczogKHNlbGxlcklkOiBzdHJpbmcgLCBhZGRyZXNzTmFtZTogc3RyaW5nKSA9PlxuICAgICAgICBgaHR0cHM6Ly8ke3NlbGxlcklkfSR7YmFzZVVSTH0vQUQvc2VhcmNoP19maWVsZHM9X2FsbCZhZGRyZXNzTmFtZT0ke2FkZHJlc3NOYW1lfWAsXG4gICAgICBkZWxldGVBZGRyZXNzOiAoYWRkcmVzc0lkOiBzdHJpbmcsIHNlbGxlcklkOiBzdHJpbmcpID0+XG4gICAgICAgIGBodHRwczovLyR7c2VsbGVySWR9JHtiYXNlVVJMfS9BRC9kb2N1bWVudHMvJHthZGRyZXNzSWR9YCxcbiAgICB9XG4gIH1cbn1cbiJdfQ==