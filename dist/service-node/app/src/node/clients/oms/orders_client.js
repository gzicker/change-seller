"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersClient = void 0;
const api_1 = require("@vtex/api");
const constants_1 = require("../../utils/constants");
class OrdersClient extends api_1.JanusClient {
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
                    : null),
                'x-vtex-user-agent': ctx.userAgent,
            },
        });
    }
    /**
     * GetOrdersList
     */
    async getOrdersList(data) {
        return this.getOrders(data.email, data.per_page, data.page);
    }
    /**
     * getMarket
     */
    async getMket() {
        try {
            const URI = this.routes.getMket();
            const response = await this.http.get(URI);
            return (response === null || response === void 0 ? void 0 : response.parentAccountName) == null
                ? { account: response === null || response === void 0 ? void 0 : response.accountName, seller: false }
                : { account: response === null || response === void 0 ? void 0 : response.parentAccountName, seller: true };
        }
        catch (error) {
            return { account: constants_1.AmbientePpal, seller: false };
        }
    }
    /*
     * getOrders
     */
    async getOrders(email, per_page, page) {
        try {
            const responsemket = await this.getMket();
            const URI = this.routes.getOrders();
            let response;
            if (responsemket.seller == true) {
                response = await this.http.get(URI, {
                    params: {
                        q: email,
                        per_page: per_page,
                        page: page,
                        an: responsemket.account,
                        f_sellerNames: this.context.account,
                    },
                });
            }
            else {
                response = await this.http.get(URI, {
                    params: {
                        q: email,
                        per_page: per_page,
                        page: page,
                        an: responsemket.account,
                    },
                });
            }
            return response;
        }
        catch (error) {
            return null;
        }
    }
    get routes() {
        return {
            getOrders: () => `/api/oms/pvt/orders/`,
            getMket: () => `/api/vlm/account`,
        };
    }
}
exports.OrdersClient = OrdersClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzX2NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9ub2RlL2NsaWVudHMvb21zL29yZGVyc19jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQXVDO0FBR3ZDLHFEQUFvRDtBQUVwRCxNQUFhLFlBQWEsU0FBUSxpQkFBVztJQUMzQyxZQUFZLEdBQWMsRUFBRSxPQUF5QjtRQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ1QsR0FBRyxPQUFPO1lBQ1YsT0FBTyxFQUFFO2dCQUNQLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0I7b0JBQ3hCLENBQUMsQ0FBQzt3QkFDRSxxQkFBcUIsRUFBRSxHQUFHLENBQUMsa0JBQWtCO3dCQUM3QyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsa0JBQWtCO3FCQUM5QztvQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNULG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxTQUFTO2FBQ25DO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFlO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxPQUFPO1FBQ2xCLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2pDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDekMsT0FBTyxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxpQkFBaUIsS0FBSSxJQUFJO2dCQUN4QyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNuRCxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQTtTQUMzRDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxFQUFFLE9BQU8sRUFBRSx3QkFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQTtTQUNoRDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBYSxFQUFFLFFBQWdCLEVBQUUsSUFBWTtRQUNsRSxJQUFJO1lBQ0YsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDekMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUNuQyxJQUFJLFFBQVEsQ0FBQTtZQUNaLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQy9CLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDbEMsTUFBTSxFQUFFO3dCQUNOLENBQUMsRUFBRSxLQUFLO3dCQUNSLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixJQUFJLEVBQUUsSUFBSTt3QkFDVixFQUFFLEVBQUUsWUFBWSxDQUFDLE9BQU87d0JBQ3hCLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87cUJBQ3BDO2lCQUNGLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDbEMsTUFBTSxFQUFFO3dCQUNOLENBQUMsRUFBRSxLQUFLO3dCQUNSLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixJQUFJLEVBQUUsSUFBSTt3QkFDVixFQUFFLEVBQUUsWUFBWSxDQUFDLE9BQU87cUJBQ3pCO2lCQUNGLENBQUMsQ0FBQTthQUNIO1lBRUQsT0FBTyxRQUFRLENBQUE7U0FDaEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFDSCxDQUFDO0lBRUQsSUFBWSxNQUFNO1FBQ2hCLE9BQU87WUFDTCxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQ2Qsc0JBQXNCO1lBQ3hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDWixrQkFBa0I7U0FDckIsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQWxGRCxvQ0FrRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEluc3RhbmNlT3B0aW9ucywgSU9Db250ZXh0IH0gZnJvbSAnQHZ0ZXgvYXBpJ1xuaW1wb3J0IHsgSmFudXNDbGllbnQgfSBmcm9tICdAdnRleC9hcGknXG5cbmltcG9ydCB0eXBlIHsgR2V0T3JkZXJzIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9vcmRlcnMnXG5pbXBvcnQgeyBBbWJpZW50ZVBwYWwgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnXG5cbmV4cG9ydCBjbGFzcyBPcmRlcnNDbGllbnQgZXh0ZW5kcyBKYW51c0NsaWVudCB7XG4gIGNvbnN0cnVjdG9yKGN0eDogSU9Db250ZXh0LCBvcHRpb25zPzogSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoY3R4LCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi4ob3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMpLFxuICAgICAgICAuLi4oY3R4LmFkbWluVXNlckF1dGhUb2tlblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBWdGV4SWRjbGllbnRBdXRDb29raWU6IGN0eC5hZG1pblVzZXJBdXRoVG9rZW4sXG4gICAgICAgICAgICAgICdQcm94eS1BdXRob3JpemF0aW9uJzogY3R4LmFkbWluVXNlckF1dGhUb2tlbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGwpLFxuICAgICAgICAneC12dGV4LXVzZXItYWdlbnQnOiBjdHgudXNlckFnZW50LFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdldE9yZGVyc0xpc3RcbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRPcmRlcnNMaXN0KGRhdGE6IEdldE9yZGVycykge1xuICAgIHJldHVybiB0aGlzLmdldE9yZGVycyhkYXRhLmVtYWlsLCBkYXRhLnBlcl9wYWdlLCBkYXRhLnBhZ2UpXG4gIH1cblxuICAvKipcbiAgICogZ2V0TWFya2V0XG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0TWtldCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgVVJJID0gdGhpcy5yb3V0ZXMuZ2V0TWtldCgpXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoVVJJKVxuICAgICAgcmV0dXJuIHJlc3BvbnNlPy5wYXJlbnRBY2NvdW50TmFtZSA9PSBudWxsXG4gICAgICAgID8geyBhY2NvdW50OiByZXNwb25zZT8uYWNjb3VudE5hbWUsIHNlbGxlcjogZmFsc2UgfVxuICAgICAgICA6IHsgYWNjb3VudDogcmVzcG9uc2U/LnBhcmVudEFjY291bnROYW1lLCBzZWxsZXI6IHRydWUgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4geyBhY2NvdW50OiBBbWJpZW50ZVBwYWwsIHNlbGxlcjogZmFsc2UgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIGdldE9yZGVyc1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldE9yZGVycyhlbWFpbDogc3RyaW5nLCBwZXJfcGFnZTogbnVtYmVyLCBwYWdlOiBudW1iZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2Vta2V0ID0gYXdhaXQgdGhpcy5nZXRNa2V0KClcbiAgICAgIGNvbnN0IFVSSSA9IHRoaXMucm91dGVzLmdldE9yZGVycygpXG4gICAgICBsZXQgcmVzcG9uc2VcbiAgICAgIGlmIChyZXNwb25zZW1rZXQuc2VsbGVyID09IHRydWUpIHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFVSSSwge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcTogZW1haWwsXG4gICAgICAgICAgICBwZXJfcGFnZTogcGVyX3BhZ2UsXG4gICAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgICAgYW46IHJlc3BvbnNlbWtldC5hY2NvdW50LFxuICAgICAgICAgICAgZl9zZWxsZXJOYW1lczogdGhpcy5jb250ZXh0LmFjY291bnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChVUkksIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHE6IGVtYWlsLFxuICAgICAgICAgICAgcGVyX3BhZ2U6IHBlcl9wYWdlLFxuICAgICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICAgIGFuOiByZXNwb25zZW1rZXQuYWNjb3VudCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCByb3V0ZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldE9yZGVyczogKCkgPT5cbiAgICAgICAgYC9hcGkvb21zL3B2dC9vcmRlcnMvYCxcbiAgICAgIGdldE1rZXQ6ICgpID0+XG4gICAgICAgIGAvYXBpL3ZsbS9hY2NvdW50YCxcbiAgICB9XG4gIH1cbn1cbiJdfQ==