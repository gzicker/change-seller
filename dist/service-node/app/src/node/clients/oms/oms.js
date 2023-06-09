"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OMS = void 0;
const api_1 = require("@vtex/api");
const request_1 = require("../utils/request");
const baseURL = '/api/oms';
const routes = {
    orders: `${baseURL}/pvt/orders`,
    ordersList: (queryString) => `${baseURL}/pvt/orders${queryString}`,
    lastOrder: `${baseURL}/user/orders/last`,
    order: (id) => `${baseURL}/pvt/orders/${id}`,
    notification: (id) => `${baseURL}/pvt/orders/${id}/invoice`,
    cancel: (id) => `${baseURL}/pvt/orders/${id}/cancel`,
};
class OMS extends api_1.JanusClient {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
        });
    }
    listOrders(authMethod = 'AUTH_TOKEN', tracingConfig) {
        const metric = 'oms-listOrders';
        return this.http.get(routes.orders, request_1.getRequestConfig(this.context, authMethod, metric, tracingConfig));
    }
    listOrdersByClient(queryString, authMethod = 'ADMIN_TOKEN', tracingConfig) {
        const metric = 'oms-listOrdersByClient';
        return this.http.get(routes.ordersList(queryString), request_1.getRequestConfig(this.context, authMethod, metric, tracingConfig));
    }
    userLastOrder(authMethod = 'AUTH_TOKEN', tracingConfig) {
        const metric = 'oms-userLastOrder';
        return this.http.get(routes.lastOrder, request_1.getRequestConfig(this.context, authMethod, metric, tracingConfig));
    }
    order(id, authMethod = 'AUTH_TOKEN', tracingConfig) {
        const metric = 'oms-order';
        return this.http.get(routes.order(id), request_1.getRequestConfig(this.context, authMethod, metric, tracingConfig));
    }
    // eslint-disable-next-line max-params
    orderNotification(id, body, authMethod = 'AUTH_TOKEN', tracingConfig) {
        const metric = 'oms-orderNotification';
        return this.http.post(routes.notification(id), body, request_1.getRequestConfig(this.context, authMethod, metric, tracingConfig));
    }
    cancelOrder(id, authMethod = 'AUTH_TOKEN', tracingConfig) {
        const metric = 'oms-cancelOrder';
        return this.http.post(routes.cancel(id), request_1.getRequestConfig(this.context, authMethod, metric, tracingConfig));
    }
}
exports.OMS = OMS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvY2xpZW50cy9vbXMvb21zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUtrQjtBQVdsQiw4Q0FBbUQ7QUFFbkQsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFBO0FBRTFCLE1BQU0sTUFBTSxHQUFHO0lBQ2IsTUFBTSxFQUFFLEdBQUcsT0FBTyxhQUFhO0lBQy9CLFVBQVUsRUFBQyxDQUFFLFdBQW1CLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxjQUFjLFdBQVcsRUFBRTtJQUMxRSxTQUFTLEVBQUUsR0FBRyxPQUFPLG1CQUFtQjtJQUN4QyxLQUFLLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxlQUFlLEVBQUUsRUFBRTtJQUNwRCxZQUFZLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxlQUFlLEVBQUUsVUFBVTtJQUNuRSxNQUFNLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxlQUFlLEVBQUUsU0FBUztDQUc3RCxDQUFBO0FBRUQsTUFBYSxHQUFJLFNBQVEsaUJBQVc7SUFDbEMsWUFBWSxHQUFjLEVBQUUsT0FBeUI7UUFDbkQsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNULEdBQUcsT0FBTztTQUNYLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxVQUFVLENBQ2YsYUFBeUIsWUFBWSxFQUNyQyxhQUFvQztRQUVwQyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQTtRQUUvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixNQUFNLENBQUMsTUFBTSxFQUNiLDBCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FFbEUsQ0FBQTtJQUNILENBQUM7SUFHTSxrQkFBa0IsQ0FDdkIsV0FBbUIsRUFDbkIsYUFBeUIsYUFBYSxFQUN0QyxhQUFvQztRQUVwQyxNQUFNLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQTtRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUM5QiwwQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBRWxFLENBQUE7SUFDSCxDQUFDO0lBRU0sYUFBYSxDQUNsQixhQUF5QixZQUFZLEVBQ3JDLGFBQW9DO1FBRXBDLE1BQU0sTUFBTSxHQUFHLG1CQUFtQixDQUFBO1FBRWxDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLE1BQU0sQ0FBQyxTQUFTLEVBQ2hCLDBCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FDbEUsQ0FBQTtJQUNILENBQUM7SUFFTSxLQUFLLENBQ1YsRUFBVSxFQUNWLGFBQXlCLFlBQVksRUFDckMsYUFBb0M7UUFFcEMsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFBO1FBRTFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQ2hCLDBCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FDbEUsQ0FBQTtJQUNILENBQUM7SUFFRCxzQ0FBc0M7SUFDL0IsaUJBQWlCLENBQ3RCLEVBQVUsRUFDVixJQUF1QixFQUN2QixhQUF5QixZQUFZLEVBQ3JDLGFBQW9DO1FBRXBDLE1BQU0sTUFBTSxHQUFHLHVCQUF1QixDQUFBO1FBRXRDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQ3ZCLElBQUksRUFDSiwwQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQ2xFLENBQUE7SUFDSCxDQUFDO0lBRU0sV0FBVyxDQUNoQixFQUFVLEVBQ1YsYUFBeUIsWUFBWSxFQUNyQyxhQUFvQztRQUVwQyxNQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQTtRQUVoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUNqQiwwQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQ2xFLENBQUE7SUFDSCxDQUFDO0NBQ0Y7QUF4RkQsa0JBd0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5zdGFuY2VPcHRpb25zLFxuICBJT0NvbnRleHQsXG4gIEphbnVzQ2xpZW50LFxuICBSZXF1ZXN0VHJhY2luZ0NvbmZpZyxcbn0gZnJvbSAnQHZ0ZXgvYXBpJ1xuXG5pbXBvcnQgeyBBdXRoTWV0aG9kIH0gZnJvbSAnLi4vdHlwaW5ncy90b2tlbnMnXG5pbXBvcnQge1xuICBDYW5jZWxSZXNwb25zZSxcbiAgTGlzdE9yZGVyc1Jlc3BvbnNlLFxuICBOb3RpZmljYXRpb25JbnB1dCxcbiAgTm90aWZpY2F0aW9uUmVzcG9uc2UsXG4gIE9yZGVyRGV0YWlsUmVzcG9uc2UsXG59IGZyb20gJy4uL3R5cGluZ3Mvb21zJ1xuaW1wb3J0IHsgT3JkZXJGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3R5cGluZ3Mvb3JkZXJGb3JtJ1xuaW1wb3J0IHsgZ2V0UmVxdWVzdENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXG5cbmNvbnN0IGJhc2VVUkwgPSAnL2FwaS9vbXMnXG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgb3JkZXJzOiBgJHtiYXNlVVJMfS9wdnQvb3JkZXJzYCxcbiAgb3JkZXJzTGlzdDooIHF1ZXJ5U3RyaW5nOiBTdHJpbmcpID0+IGAke2Jhc2VVUkx9L3B2dC9vcmRlcnMke3F1ZXJ5U3RyaW5nfWAsXG4gIGxhc3RPcmRlcjogYCR7YmFzZVVSTH0vdXNlci9vcmRlcnMvbGFzdGAsXG4gIG9yZGVyOiAoaWQ6IHN0cmluZykgPT4gYCR7YmFzZVVSTH0vcHZ0L29yZGVycy8ke2lkfWAsXG4gIG5vdGlmaWNhdGlvbjogKGlkOiBzdHJpbmcpID0+IGAke2Jhc2VVUkx9L3B2dC9vcmRlcnMvJHtpZH0vaW52b2ljZWAsXG4gIGNhbmNlbDogKGlkOiBzdHJpbmcpID0+IGAke2Jhc2VVUkx9L3B2dC9vcmRlcnMvJHtpZH0vY2FuY2VsYCxcblxuXG59XG5cbmV4cG9ydCBjbGFzcyBPTVMgZXh0ZW5kcyBKYW51c0NsaWVudCB7XG4gIGNvbnN0cnVjdG9yKGN0eDogSU9Db250ZXh0LCBvcHRpb25zPzogSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoY3R4LCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgbGlzdE9yZGVycyhcbiAgICBhdXRoTWV0aG9kOiBBdXRoTWV0aG9kID0gJ0FVVEhfVE9LRU4nLFxuICAgIHRyYWNpbmdDb25maWc/OiBSZXF1ZXN0VHJhY2luZ0NvbmZpZ1xuICApIHtcbiAgICBjb25zdCBtZXRyaWMgPSAnb21zLWxpc3RPcmRlcnMnXG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxMaXN0T3JkZXJzUmVzcG9uc2U+KFxuICAgICAgcm91dGVzLm9yZGVycyxcbiAgICAgIGdldFJlcXVlc3RDb25maWcodGhpcy5jb250ZXh0LCBhdXRoTWV0aG9kLCBtZXRyaWMsIHRyYWNpbmdDb25maWcpLFxuXG4gICAgKVxuICB9XG5cblxuICBwdWJsaWMgbGlzdE9yZGVyc0J5Q2xpZW50KFxuICAgIHF1ZXJ5U3RyaW5nOiBTdHJpbmcsXG4gICAgYXV0aE1ldGhvZDogQXV0aE1ldGhvZCA9ICdBRE1JTl9UT0tFTicsXG4gICAgdHJhY2luZ0NvbmZpZz86IFJlcXVlc3RUcmFjaW5nQ29uZmlnICxcbiAgKSB7XG4gICAgY29uc3QgbWV0cmljID0gJ29tcy1saXN0T3JkZXJzQnlDbGllbnQnXG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxMaXN0T3JkZXJzUmVzcG9uc2U+KFxuICAgICAgcm91dGVzLm9yZGVyc0xpc3QocXVlcnlTdHJpbmcpLFxuICAgICAgZ2V0UmVxdWVzdENvbmZpZyh0aGlzLmNvbnRleHQsIGF1dGhNZXRob2QsIG1ldHJpYywgdHJhY2luZ0NvbmZpZyksXG5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgdXNlckxhc3RPcmRlcihcbiAgICBhdXRoTWV0aG9kOiBBdXRoTWV0aG9kID0gJ0FVVEhfVE9LRU4nLFxuICAgIHRyYWNpbmdDb25maWc/OiBSZXF1ZXN0VHJhY2luZ0NvbmZpZ1xuICApIHtcbiAgICBjb25zdCBtZXRyaWMgPSAnb21zLXVzZXJMYXN0T3JkZXInXG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcmRlckZvcm1Db25maWd1cmF0aW9uPihcbiAgICAgIHJvdXRlcy5sYXN0T3JkZXIsXG4gICAgICBnZXRSZXF1ZXN0Q29uZmlnKHRoaXMuY29udGV4dCwgYXV0aE1ldGhvZCwgbWV0cmljLCB0cmFjaW5nQ29uZmlnKVxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBvcmRlcihcbiAgICBpZDogc3RyaW5nLFxuICAgIGF1dGhNZXRob2Q6IEF1dGhNZXRob2QgPSAnQVVUSF9UT0tFTicsXG4gICAgdHJhY2luZ0NvbmZpZz86IFJlcXVlc3RUcmFjaW5nQ29uZmlnXG4gICkge1xuICAgIGNvbnN0IG1ldHJpYyA9ICdvbXMtb3JkZXInXG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcmRlckRldGFpbFJlc3BvbnNlPihcbiAgICAgIHJvdXRlcy5vcmRlcihpZCksXG4gICAgICBnZXRSZXF1ZXN0Q29uZmlnKHRoaXMuY29udGV4dCwgYXV0aE1ldGhvZCwgbWV0cmljLCB0cmFjaW5nQ29uZmlnKVxuICAgIClcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG4gIHB1YmxpYyBvcmRlck5vdGlmaWNhdGlvbihcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IE5vdGlmaWNhdGlvbklucHV0LFxuICAgIGF1dGhNZXRob2Q6IEF1dGhNZXRob2QgPSAnQVVUSF9UT0tFTicsXG4gICAgdHJhY2luZ0NvbmZpZz86IFJlcXVlc3RUcmFjaW5nQ29uZmlnXG4gICkge1xuICAgIGNvbnN0IG1ldHJpYyA9ICdvbXMtb3JkZXJOb3RpZmljYXRpb24nXG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Tm90aWZpY2F0aW9uUmVzcG9uc2U+KFxuICAgICAgcm91dGVzLm5vdGlmaWNhdGlvbihpZCksXG4gICAgICBib2R5LFxuICAgICAgZ2V0UmVxdWVzdENvbmZpZyh0aGlzLmNvbnRleHQsIGF1dGhNZXRob2QsIG1ldHJpYywgdHJhY2luZ0NvbmZpZylcbiAgICApXG4gIH1cblxuICBwdWJsaWMgY2FuY2VsT3JkZXIoXG4gICAgaWQ6IHN0cmluZyxcbiAgICBhdXRoTWV0aG9kOiBBdXRoTWV0aG9kID0gJ0FVVEhfVE9LRU4nLFxuICAgIHRyYWNpbmdDb25maWc/OiBSZXF1ZXN0VHJhY2luZ0NvbmZpZ1xuICApIHtcbiAgICBjb25zdCBtZXRyaWMgPSAnb21zLWNhbmNlbE9yZGVyJ1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PENhbmNlbFJlc3BvbnNlPihcbiAgICAgIHJvdXRlcy5jYW5jZWwoaWQpLFxuICAgICAgZ2V0UmVxdWVzdENvbmZpZyh0aGlzLmNvbnRleHQsIGF1dGhNZXRob2QsIG1ldHJpYywgdHJhY2luZ0NvbmZpZylcbiAgICApXG4gIH1cbn1cbiJdfQ==