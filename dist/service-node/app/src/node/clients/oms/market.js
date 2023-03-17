"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMarketClient = void 0;
const api_1 = require("@vtex/api");
const request_1 = require("../utils/request");
const baseURL = 'api/vlm/account';
const routes = {
    getMket: () => `${baseURL}`,
};
class GetMarketClient extends api_1.JanusClient {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
        });
    }
    async getMarket(authMethod = 'ADMIN_TOKEN', tracingConfig) {
        const metric = '';
        try {
            const response = await this.http.get(routes.getMket(), request_1.getRequestConfig(this.context, authMethod, metric, tracingConfig));
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.GetMarketClient = GetMarketClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvY2xpZW50cy9vbXMvbWFya2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLG1DQUF1QztBQUd2Qyw4Q0FBbUQ7QUFFbkQsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUE7QUFFakMsTUFBTSxNQUFNLEdBQUc7SUFDYixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUU7Q0FDNUIsQ0FBQTtBQUVELE1BQWEsZUFBZ0IsU0FBUSxpQkFBVztJQUM5QyxZQUFZLEdBQWMsRUFBRSxPQUF5QjtRQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ1QsR0FBRyxPQUFPO1NBQ1gsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTLENBQ3BCLGFBQXlCLGFBQWEsRUFDdEMsYUFBb0M7UUFFcEMsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBRWpCLElBQUk7WUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQ2hCLDBCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FDbEUsQ0FBQTtZQUNELE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ25CO0lBQ0gsQ0FBQztDQUNGO0FBdkJELDBDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgSW5zdGFuY2VPcHRpb25zLFxuICBJT0NvbnRleHQsXG4gIFJlcXVlc3RUcmFjaW5nQ29uZmlnLFxufSBmcm9tICdAdnRleC9hcGknXG5pbXBvcnQgeyBKYW51c0NsaWVudCB9IGZyb20gJ0B2dGV4L2FwaSdcblxuaW1wb3J0IHR5cGUgeyBBdXRoTWV0aG9kIH0gZnJvbSAnLi4vdHlwaW5ncy90b2tlbnMnXG5pbXBvcnQgeyBnZXRSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCdcblxuY29uc3QgYmFzZVVSTCA9ICdhcGkvdmxtL2FjY291bnQnXG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgZ2V0TWtldDogKCkgPT4gYCR7YmFzZVVSTH1gLFxufVxuXG5leHBvcnQgY2xhc3MgR2V0TWFya2V0Q2xpZW50IGV4dGVuZHMgSmFudXNDbGllbnQge1xuICBjb25zdHJ1Y3RvcihjdHg6IElPQ29udGV4dCwgb3B0aW9ucz86IEluc3RhbmNlT3B0aW9ucykge1xuICAgIHN1cGVyKGN0eCwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldE1hcmtldChcbiAgICBhdXRoTWV0aG9kOiBBdXRoTWV0aG9kID0gJ0FETUlOX1RPS0VOJyxcbiAgICB0cmFjaW5nQ29uZmlnPzogUmVxdWVzdFRyYWNpbmdDb25maWdcbiAgKTogUHJvbWlzZTxhbnkgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBtZXRyaWMgPSAnJ1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChcbiAgICAgICAgcm91dGVzLmdldE1rZXQoKSxcbiAgICAgICAgZ2V0UmVxdWVzdENvbmZpZyh0aGlzLmNvbnRleHQsIGF1dGhNZXRob2QsIG1ldHJpYywgdHJhY2luZ0NvbmZpZylcbiAgICAgIClcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cbn1cbiJdfQ==