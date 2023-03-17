"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const api_1 = require("@vtex/api");
const request_keys_1 = require("../utils/request_keys");
const baseURLpub = '.vtexpayments.com.br/api/pub/transactions';
const baseURL = '.vtexpayments.com.br/api/pvt/transactions';
const routes = {
    createTransaction: (account, transactionId) => `https://${account}${baseURLpub}/${transactionId}/payments`,
    authorizeOrder: (account, transactionId) => `https://${account}${baseURL}/${transactionId}/authorization-request`,
    gatewayCallback: (account, orderGroup) => `https://${account}.vtexcommercestable.com.br/api/checkout/pub/gatewayCallback/${orderGroup}`,
};
class Payment extends api_1.JanusClient {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
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
            return error;
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
            const response = await this.http.post(URI, data, {
                params: {
                    an: account,
                },
            });
            return response;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.Payment = Payment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9ub2RlL2NsaWVudHMvcGF5bWVudC9wYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUF1QztBQUN2Qyx3REFBMkQ7QUFFM0QsTUFBTSxVQUFVLEdBQUcsMkNBQTJDLENBQUE7QUFDOUQsTUFBTSxPQUFPLEdBQUcsMkNBQTJDLENBQUE7QUFFM0QsTUFBTSxNQUFNLEdBQUc7SUFDYixpQkFBaUIsRUFBRSxDQUFDLE9BQWUsRUFBRSxhQUFxQixFQUFFLEVBQUUsQ0FDNUQsV0FBVyxPQUFPLEdBQUcsVUFBVSxJQUFJLGFBQWEsV0FBVztJQUM3RCxjQUFjLEVBQUUsQ0FBQyxPQUFlLEVBQUUsYUFBcUIsRUFBRSxFQUFFLENBQ3pELFdBQVcsT0FBTyxHQUFHLE9BQU8sSUFBSSxhQUFhLHdCQUF3QjtJQUN2RSxlQUFlLEVBQUUsQ0FBQyxPQUFlLEVBQUUsVUFBa0IsRUFBRSxFQUFFLENBQ3ZELFdBQVcsT0FBTywrREFBK0QsVUFBVSxFQUFFO0NBQ2hHLENBQUE7QUFFRCxNQUFhLE9BQVEsU0FBUSxpQkFBVztJQUN0QyxZQUFZLEdBQWMsRUFBRSxPQUF5QjtRQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ1QsR0FBRyxPQUFPO1NBQ1gsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHNDQUFzQztJQUMvQixLQUFLLENBQUMsaUJBQWlCLENBQzVCLE9BQWUsRUFDZixhQUFxQixFQUNyQixXQUFnQjtRQUVoQixJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtZQUM1RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsa0NBQW1CLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQTtZQUV0RixPQUFPLFFBQVEsQ0FBQTtTQUNoQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMvQyxPQUFPLEtBQUssQ0FBQTtTQUNiO0lBQ0gsQ0FBQztJQUVELHNDQUFzQztJQUMvQixLQUFLLENBQUMsd0JBQXdCLENBQ25DLE9BQWUsRUFDZixhQUFxQixFQUNyQixhQUFrQjtRQUVsQixJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUE7WUFDekQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLGtDQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7WUFDdkYsT0FBTyxRQUFRLENBQUE7U0FDaEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFakQsT0FBTyxJQUFJLENBQUE7U0FDWjtJQUNILENBQUM7SUFFRCxzQ0FBc0M7SUFDL0IsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFlLEVBQUUsVUFBa0IsRUFBRSxJQUFTO1FBQ3pFLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQTtZQUN2RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7Z0JBQy9DLE1BQU0sRUFBRTtvQkFDTixFQUFFLEVBQUUsT0FBTztpQkFDWjthQUNGLENBQUMsQ0FBQTtZQUVGLE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDO0NBQ0Y7QUF6REQsMEJBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJbnN0YW5jZU9wdGlvbnMsIElPQ29udGV4dCB9IGZyb20gJ0B2dGV4L2FwaSdcbmltcG9ydCB7IEphbnVzQ2xpZW50IH0gZnJvbSAnQHZ0ZXgvYXBpJ1xuaW1wb3J0IHsgZ2V0UmVxdWVzdENvbmZpZ0tleSB9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3Rfa2V5cydcblxuY29uc3QgYmFzZVVSTHB1YiA9ICcudnRleHBheW1lbnRzLmNvbS5ici9hcGkvcHViL3RyYW5zYWN0aW9ucydcbmNvbnN0IGJhc2VVUkwgPSAnLnZ0ZXhwYXltZW50cy5jb20uYnIvYXBpL3B2dC90cmFuc2FjdGlvbnMnXG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgY3JlYXRlVHJhbnNhY3Rpb246IChhY2NvdW50OiBzdHJpbmcsIHRyYW5zYWN0aW9uSWQ6IHN0cmluZykgPT5cbiAgICBgaHR0cHM6Ly8ke2FjY291bnR9JHtiYXNlVVJMcHVifS8ke3RyYW5zYWN0aW9uSWR9L3BheW1lbnRzYCxcbiAgYXV0aG9yaXplT3JkZXI6IChhY2NvdW50OiBzdHJpbmcsIHRyYW5zYWN0aW9uSWQ6IHN0cmluZykgPT5cbiAgICBgaHR0cHM6Ly8ke2FjY291bnR9JHtiYXNlVVJMfS8ke3RyYW5zYWN0aW9uSWR9L2F1dGhvcml6YXRpb24tcmVxdWVzdGAsXG4gIGdhdGV3YXlDYWxsYmFjazogKGFjY291bnQ6IHN0cmluZywgb3JkZXJHcm91cDogc3RyaW5nKSA9PlxuICAgIGBodHRwczovLyR7YWNjb3VudH0udnRleGNvbW1lcmNlc3RhYmxlLmNvbS5ici9hcGkvY2hlY2tvdXQvcHViL2dhdGV3YXlDYWxsYmFjay8ke29yZGVyR3JvdXB9YCxcbn1cblxuZXhwb3J0IGNsYXNzIFBheW1lbnQgZXh0ZW5kcyBKYW51c0NsaWVudCB7XG4gIGNvbnN0cnVjdG9yKGN0eDogSU9Db250ZXh0LCBvcHRpb25zPzogSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoY3R4LCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICBwdWJsaWMgYXN5bmMgY3JlYXRlVHJhbnNhY3Rpb24oXG4gICAgYWNjb3VudDogc3RyaW5nLFxuICAgIHRyYW5zYWN0aW9uSWQ6IHN0cmluZyxcbiAgICB0cmFuc2FjdGlvbjogYW55XG4gICkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBVUkkgPSByb3V0ZXMuY3JlYXRlVHJhbnNhY3Rpb24oYWNjb3VudCwgdHJhbnNhY3Rpb25JZClcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoVVJJLCB0cmFuc2FjdGlvbiwgZ2V0UmVxdWVzdENvbmZpZ0tleShhY2NvdW50KSApXG5cbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgVFggLi4nLCBlcnJvci5yZXNwb25zZS5kYXRhKVxuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbiAgcHVibGljIGFzeW5jIGF1dGhvcml6YXRpb25UcmFuc2FjdGlvbihcbiAgICBhY2NvdW50OiBzdHJpbmcsXG4gICAgdHJhbnNhY3Rpb25JZDogc3RyaW5nLFxuICAgIGF1dGhvcml6YXRpb246IGFueVxuICApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgVVJJID0gcm91dGVzLmF1dGhvcml6ZU9yZGVyKGFjY291bnQsIHRyYW5zYWN0aW9uSWQpXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFVSSSwgYXV0aG9yaXphdGlvbiwgZ2V0UmVxdWVzdENvbmZpZ0tleShhY2NvdW50KSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1IgQVVUSCAuLicsIGVycm9yLnJlc3BvbnNlLmRhdGEpXG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbiAgcHVibGljIGFzeW5jIGdhdGV3YXlDYWxsYmFjayhhY2NvdW50OiBzdHJpbmcsIG9yZGVyR3JvdXA6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFVSSSA9IHJvdXRlcy5nYXRld2F5Q2FsbGJhY2soYWNjb3VudCwgb3JkZXJHcm91cClcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoVVJJLCBkYXRhLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFuOiBhY2NvdW50LFxuICAgICAgICB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuICB9XG59XG4iXX0=