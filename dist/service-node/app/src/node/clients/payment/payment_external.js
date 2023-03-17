"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentExternal = void 0;
const api_1 = require("@vtex/api");
const request_keys_1 = require("../utils/request_keys");
const baseURLpub = '.vtexpayments.com.br/api/pub/transactions';
const baseURL = '.vtexpayments.com.br/api/pvt/transactions';
const routes = {
    createTransaction: (account, transactionId) => `https://${account}${baseURLpub}/${transactionId}/payments`,
    authorizeOrder: (account, transactionId) => `https://${account}${baseURL}/${transactionId}/authorization-request`,
    gatewayCallback: (account, orderGroup) => `https://${account}.vtexcommercestable.com.br/api/checkout/pub/gatewayCallback/${orderGroup}`,
};
class PaymentExternal extends api_1.ExternalClient {
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
    // eslint-disable-next-line max-params
    async createTransaction(account, transactionId, transaction) {
        try {
            const URI = routes.createTransaction(account, transactionId);
            const response = await this.http.post(URI, transaction, request_keys_1.getRequestConfigKey(account));
            return response;
        }
        catch (error) {
            console.log('Error TX ..', error.response.data);
            return null;
        }
    }
    // eslint-disable-next-line max-params
    async authorizationTransaction(account, transactionId, authorization) {
        try {
            const URI = routes.authorizeOrder(account, transactionId);
            const response = await this.http.post(URI, authorization, request_keys_1.getRequestConfigKey(account));
            return response;
        }
        catch (error) {
            console.log('ERROR AUTH ..', error.response.data);
            return null;
        }
    }
    // eslint-disable-next-line max-params
    async gatewayCallback(account, orderGroup, data) {
        try {
            const URI = routes.gatewayCallback(account, orderGroup);
            const response = await this.http.post(URI, data, request_keys_1.getRequestConfigKey(account));
            return response;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.PaymentExternal = PaymentExternal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudF9leHRlcm5hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9ub2RlL2NsaWVudHMvcGF5bWVudC9wYXltZW50X2V4dGVybmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFzRTtBQUN0RSx3REFBMkQ7QUFFM0QsTUFBTSxVQUFVLEdBQUcsMkNBQTJDLENBQUE7QUFDOUQsTUFBTSxPQUFPLEdBQUcsMkNBQTJDLENBQUE7QUFFM0QsTUFBTSxNQUFNLEdBQUc7SUFDYixpQkFBaUIsRUFBRSxDQUFDLE9BQWUsRUFBRSxhQUFxQixFQUFFLEVBQUUsQ0FDNUQsV0FBVyxPQUFPLEdBQUcsVUFBVSxJQUFJLGFBQWEsV0FBVztJQUM3RCxjQUFjLEVBQUUsQ0FBQyxPQUFlLEVBQUUsYUFBcUIsRUFBRSxFQUFFLENBQ3pELFdBQVcsT0FBTyxHQUFHLE9BQU8sSUFBSSxhQUFhLHdCQUF3QjtJQUN2RSxlQUFlLEVBQUUsQ0FBQyxPQUFlLEVBQUUsVUFBa0IsRUFBRSxFQUFFLENBQ3ZELFdBQVcsT0FBTywrREFBK0QsVUFBVSxFQUFFO0NBQ2hHLENBQUE7QUFFRCxNQUFhLGVBQWdCLFNBQVEsb0JBQWM7SUFDakQsWUFBWSxHQUFjLEVBQUUsT0FBeUI7O1FBQ25ELEtBQUssQ0FBRyxFQUFFLEVBQ1YsR0FBRyxFQUNIO1lBQ0UsR0FBRyxDQUFDLE9BQU8sYUFBUCxPQUFPLGNBQVAsT0FBTyxHQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsR0FBRyxPQUFDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxPQUFPLG1DQUFJLEVBQUUsQ0FBQztnQkFDM0Isa0JBQWtCLEVBQUUsTUFBTTthQUMzQjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxzQ0FBc0M7SUFDL0IsS0FBSyxDQUFDLGlCQUFpQixDQUM1QixPQUFlLEVBQ2YsYUFBcUIsRUFDckIsV0FBZ0I7UUFFaEIsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUE7WUFDNUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLGtDQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUE7WUFDdEYsT0FBTyxRQUFRLENBQUE7U0FDaEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFL0MsT0FBTyxJQUFJLENBQUE7U0FDWjtJQUNILENBQUM7SUFFRCxzQ0FBc0M7SUFDL0IsS0FBSyxDQUFDLHdCQUF3QixDQUNuQyxPQUFlLEVBQ2YsYUFBcUIsRUFDckIsYUFBa0I7UUFFbEIsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1lBQ3pELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxrQ0FBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1lBQ3ZGLE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRWpELE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFDSCxDQUFDO0lBRUQsc0NBQXNDO0lBQy9CLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBZSxFQUFFLFVBQWtCLEVBQUUsSUFBUztRQUN6RSxJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUE7WUFDdkQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGtDQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7WUFDOUUsT0FBTyxRQUFRLENBQUE7U0FDaEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEIsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7Q0FDRjtBQTFERCwwQ0EwREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRlcm5hbENsaWVudCwgSW5zdGFuY2VPcHRpb25zLCBJT0NvbnRleHQgfSBmcm9tICdAdnRleC9hcGknXG5pbXBvcnQgeyBnZXRSZXF1ZXN0Q29uZmlnS2V5IH0gZnJvbSAnLi4vdXRpbHMvcmVxdWVzdF9rZXlzJ1xuXG5jb25zdCBiYXNlVVJMcHViID0gJy52dGV4cGF5bWVudHMuY29tLmJyL2FwaS9wdWIvdHJhbnNhY3Rpb25zJ1xuY29uc3QgYmFzZVVSTCA9ICcudnRleHBheW1lbnRzLmNvbS5ici9hcGkvcHZ0L3RyYW5zYWN0aW9ucydcblxuY29uc3Qgcm91dGVzID0ge1xuICBjcmVhdGVUcmFuc2FjdGlvbjogKGFjY291bnQ6IHN0cmluZywgdHJhbnNhY3Rpb25JZDogc3RyaW5nKSA9PlxuICAgIGBodHRwczovLyR7YWNjb3VudH0ke2Jhc2VVUkxwdWJ9LyR7dHJhbnNhY3Rpb25JZH0vcGF5bWVudHNgLFxuICBhdXRob3JpemVPcmRlcjogKGFjY291bnQ6IHN0cmluZywgdHJhbnNhY3Rpb25JZDogc3RyaW5nKSA9PlxuICAgIGBodHRwczovLyR7YWNjb3VudH0ke2Jhc2VVUkx9LyR7dHJhbnNhY3Rpb25JZH0vYXV0aG9yaXphdGlvbi1yZXF1ZXN0YCxcbiAgZ2F0ZXdheUNhbGxiYWNrOiAoYWNjb3VudDogc3RyaW5nLCBvcmRlckdyb3VwOiBzdHJpbmcpID0+XG4gICAgYGh0dHBzOi8vJHthY2NvdW50fS52dGV4Y29tbWVyY2VzdGFibGUuY29tLmJyL2FwaS9jaGVja291dC9wdWIvZ2F0ZXdheUNhbGxiYWNrLyR7b3JkZXJHcm91cH1gLFxufVxuXG5leHBvcnQgY2xhc3MgUGF5bWVudEV4dGVybmFsIGV4dGVuZHMgRXh0ZXJuYWxDbGllbnQge1xuICBjb25zdHJ1Y3RvcihjdHg6IElPQ29udGV4dCwgb3B0aW9ucz86IEluc3RhbmNlT3B0aW9ucykge1xuICAgIHN1cGVyKCAgYGAsXG4gICAgY3R4LFxuICAgIHtcbiAgICAgIC4uLihvcHRpb25zID8/IHt9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLi4uKG9wdGlvbnM/LmhlYWRlcnMgPz8ge30pLFxuICAgICAgICAnWC1WdGV4LVVzZS1IdHRwcyc6ICd0cnVlJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVUcmFuc2FjdGlvbihcbiAgICBhY2NvdW50OiBzdHJpbmcsXG4gICAgdHJhbnNhY3Rpb25JZDogc3RyaW5nLFxuICAgIHRyYW5zYWN0aW9uOiBhbnlcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFVSSSA9IHJvdXRlcy5jcmVhdGVUcmFuc2FjdGlvbihhY2NvdW50LCB0cmFuc2FjdGlvbklkKVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChVUkksIHRyYW5zYWN0aW9uLCBnZXRSZXF1ZXN0Q29uZmlnS2V5KGFjY291bnQpIClcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgVFggLi4nLCBlcnJvci5yZXNwb25zZS5kYXRhKVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG4gIHB1YmxpYyBhc3luYyBhdXRob3JpemF0aW9uVHJhbnNhY3Rpb24oXG4gICAgYWNjb3VudDogc3RyaW5nLFxuICAgIHRyYW5zYWN0aW9uSWQ6IHN0cmluZyxcbiAgICBhdXRob3JpemF0aW9uOiBhbnlcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFVSSSA9IHJvdXRlcy5hdXRob3JpemVPcmRlcihhY2NvdW50LCB0cmFuc2FjdGlvbklkKVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChVUkksIGF1dGhvcml6YXRpb24sIGdldFJlcXVlc3RDb25maWdLZXkoYWNjb3VudCkpXG4gICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SIEFVVEggLi4nLCBlcnJvci5yZXNwb25zZS5kYXRhKVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG4gIHB1YmxpYyBhc3luYyBnYXRld2F5Q2FsbGJhY2soYWNjb3VudDogc3RyaW5nLCBvcmRlckdyb3VwOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBVUkkgPSByb3V0ZXMuZ2F0ZXdheUNhbGxiYWNrKGFjY291bnQsIG9yZGVyR3JvdXApXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFVSSSwgZGF0YSwgZ2V0UmVxdWVzdENvbmZpZ0tleShhY2NvdW50KSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cbiAgfVxufVxuIl19