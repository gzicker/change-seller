"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@vtex/api");
const clients_1 = require("./clients");
const simulate_1 = require("./middlewares/simulate");
const master_data_1 = require("./middlewares/master_data");
const change_order_1 = require("./middlewares/change_order");
const methods_1 = require("./middlewares/methods");
const simulate_2 = require("./resolvers/simulate");
const checkout_1 = require("./resolvers/checkout");
const oms_1 = require("./resolvers/oms");
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: '.env' });
const TIMEOUT_MS = 10000;
// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new api_1.LRUCache({ max: 5000 });
metrics.trackCache('status', memoryCache);
// Export a service that defines route handlers and client options.
exports.default = new api_1.Service({
    clients: {
        implementation: clients_1.Clients,
        options: {
            default: {
                timeout: TIMEOUT_MS,
            },
        },
    },
    graphql: {
        resolvers: {
            Mutation: {
                simulateOrderLatest: simulate_2.simulateOrderLatest,
                changeOrder: change_order_1.changeOrder,
                changeOrderLatest: checkout_1.changeOrderLatest,
                simulateOrder: simulate_1.simulateOrder,
            },
            Query: { listOrders: oms_1.listOrders, listPayments: master_data_1.listPayments },
        },
    },
    routes: {
        simulate: api_1.method({
            DEFAULT: methods_1.methodNotAllowed,
        }),
        /* transfer: method({
                DEFAULT: methodNotAllowed,
                POST: [transferOrder]
            }), */
        vBase: api_1.method({
            DEFAULT: methods_1.methodNotAllowed,
        }),
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBcUQ7QUFHckQsdUNBQW1DO0FBQ25DLHFEQUFzRDtBQUN0RCwyREFBd0Q7QUFDeEQsNkRBQXdEO0FBQ3hELG1EQUF3RDtBQUN4RCxtREFBMEQ7QUFDMUQsbURBQXdEO0FBQ3hELHlDQUE0QztBQUU1QywrQ0FBZ0M7QUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0FBRS9CLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQTtBQUV4QixtREFBbUQ7QUFDbkQsdUZBQXVGO0FBQ3ZGLE1BQU0sV0FBVyxHQUFHLElBQUksY0FBUSxDQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7QUFFNUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUE7QUE4QnpDLG1FQUFtRTtBQUNuRSxrQkFBZSxJQUFJLGFBQU8sQ0FBd0M7SUFDaEUsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLGlCQUFPO1FBQ3ZCLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUU7WUFDVCxRQUFRLEVBQUU7Z0JBQ1IsbUJBQW1CLEVBQW5CLDhCQUFtQjtnQkFDbkIsV0FBVyxFQUFYLDBCQUFXO2dCQUNYLGlCQUFpQixFQUFqQiw0QkFBaUI7Z0JBQ2pCLGFBQWEsRUFBYix3QkFBYTthQUNkO1lBQ0QsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFWLGdCQUFVLEVBQUUsWUFBWSxFQUFaLDBCQUFZLEVBQUU7U0FDcEM7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxZQUFNLENBQUM7WUFDZixPQUFPLEVBQUUsMEJBQWdCO1NBQzFCLENBQUM7UUFDRjs7O2tCQUdVO1FBQ1YsS0FBSyxFQUFFLFlBQU0sQ0FBQztZQUNaLE9BQU8sRUFBRSwwQkFBZ0I7U0FDMUIsQ0FBQztLQUNIO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTFJVQ2FjaGUsIG1ldGhvZCwgU2VydmljZSB9IGZyb20gJ0B2dGV4L2FwaSdcbmltcG9ydCB0eXBlIHsgUGFyYW1zQ29udGV4dCwgUmVjb3JkZXJTdGF0ZSwgU2VydmljZUNvbnRleHQgfSBmcm9tICdAdnRleC9hcGknXG5cbmltcG9ydCB7IENsaWVudHMgfSBmcm9tICcuL2NsaWVudHMnXG5pbXBvcnQgeyBzaW11bGF0ZU9yZGVyIH0gZnJvbSAnLi9taWRkbGV3YXJlcy9zaW11bGF0ZSdcbmltcG9ydCB7IGxpc3RQYXltZW50cyB9IGZyb20gJy4vbWlkZGxld2FyZXMvbWFzdGVyX2RhdGEnXG5pbXBvcnQgeyBjaGFuZ2VPcmRlciB9IGZyb20gJy4vbWlkZGxld2FyZXMvY2hhbmdlX29yZGVyJ1xuaW1wb3J0IHsgbWV0aG9kTm90QWxsb3dlZCB9IGZyb20gJy4vbWlkZGxld2FyZXMvbWV0aG9kcydcbmltcG9ydCB7IHNpbXVsYXRlT3JkZXJMYXRlc3QgfSBmcm9tICcuL3Jlc29sdmVycy9zaW11bGF0ZSdcbmltcG9ydCB7IGNoYW5nZU9yZGVyTGF0ZXN0IH0gZnJvbSAnLi9yZXNvbHZlcnMvY2hlY2tvdXQnXG5pbXBvcnQgeyBsaXN0T3JkZXJzIH0gZnJvbSAnLi9yZXNvbHZlcnMvb21zJ1xuXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52J1xuXG5kb3RlbnYuY29uZmlnKHsgcGF0aDogJy5lbnYnIH0pXG5cbmNvbnN0IFRJTUVPVVRfTVMgPSAxMDAwMFxuXG4vLyBDcmVhdGUgYSBMUlUgbWVtb3J5IGNhY2hlIGZvciB0aGUgU3RhdHVzIGNsaWVudC5cbi8vIFRoZSBAdnRleC9hcGkgSHR0cENsaWVudCByZXNwZWN0cyBDYWNoZS1Db250cm9sIGhlYWRlcnMgYW5kIHVzZXMgdGhlIHByb3ZpZGVkIGNhY2hlLlxuY29uc3QgbWVtb3J5Q2FjaGUgPSBuZXcgTFJVQ2FjaGU8c3RyaW5nLCBhbnk+KHsgbWF4OiA1MDAwIH0pXG5cbm1ldHJpY3MudHJhY2tDYWNoZSgnc3RhdHVzJywgbWVtb3J5Q2FjaGUpXG4vLyBUaGlzIGlzIHRoZSBjb25maWd1cmF0aW9uIGZvciBjbGllbnRzIGF2YWlsYWJsZSBpbiBgY3R4LmNsaWVudHNgLlxuLyogY29uc3QgY2xpZW50czogQ2xpZW50c0NvbmZpZzxDbGllbnRzPiA9IHtcbiAgICAvLyBXZSBwYXNzIG91ciBjdXN0b20gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNsaWVudHMgYmFnLCBjb250YWluaW5nIHRoZSBTdGF0dXMgY2xpZW50LlxuICAgIGltcGxlbWVudGF0aW9uOiBDbGllbnRzLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgLy8gQWxsIElPIENsaWVudHMgd2lsbCBiZSBpbml0aWFsaXplZCB3aXRoIHRoZXNlIG9wdGlvbnMsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXRyaWVzOiAyLFxuICAgICAgICAgICAgdGltZW91dDogVElNRU9VVF9NUyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gVGhpcyBrZXkgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgZGVmYXVsdCBvcHRpb25zIGFuZCBhZGQgdGhpcyBjYWNoZSB0byBvdXIgU3RhdHVzIGNsaWVudC5cbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICBtZW1vcnlDYWNoZSxcbiAgICAgICAgfSxcbiAgICB9LFxufSAqL1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIFdlIGRlY2xhcmUgYSBnbG9iYWwgQ29udGV4dCB0eXBlIGp1c3QgdG8gYXZvaWQgcmUtd3JpdGluZyBTZXJ2aWNlQ29udGV4dDxDbGllbnRzLCBTdGF0ZT4gaW4gZXZlcnkgaGFuZGxlciBhbmQgcmVzb2x2ZXJcbiAgdHlwZSBDb250ZXh0ID0gU2VydmljZUNvbnRleHQ8Q2xpZW50cz5cblxuICAvLyBUaGUgc2hhcGUgb2Ygb3VyIFN0YXRlIG9iamVjdCBmb3VuZCBpbiBgY3R4LnN0YXRlYC4gVGhpcyBpcyB1c2VkIGFzIHN0YXRlIGJhZyB0byBjb21tdW5pY2F0ZSBiZXR3ZWVuIG1pZGRsZXdhcmVzLlxuICBpbnRlcmZhY2UgU3RhdGUge1xuICAgIGlkOiBudW1iZXJcbiAgICBkYXRhOiBzdHJpbmdbXVxuICB9XG5cbn1cblxuLy8gRXhwb3J0IGEgc2VydmljZSB0aGF0IGRlZmluZXMgcm91dGUgaGFuZGxlcnMgYW5kIGNsaWVudCBvcHRpb25zLlxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2U8Q2xpZW50cywgUmVjb3JkZXJTdGF0ZSwgUGFyYW1zQ29udGV4dD4oe1xuICBjbGllbnRzOiB7XG4gICAgaW1wbGVtZW50YXRpb246IENsaWVudHMsXG4gICAgb3B0aW9uczoge1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aW1lb3V0OiBUSU1FT1VUX01TLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBncmFwaHFsOiB7XG4gICAgcmVzb2x2ZXJzOiB7XG4gICAgICBNdXRhdGlvbjoge1xuICAgICAgICBzaW11bGF0ZU9yZGVyTGF0ZXN0LFxuICAgICAgICBjaGFuZ2VPcmRlcixcbiAgICAgICAgY2hhbmdlT3JkZXJMYXRlc3QsXG4gICAgICAgIHNpbXVsYXRlT3JkZXIsXG4gICAgICB9LFxuICAgICAgUXVlcnk6IHsgbGlzdE9yZGVycywgbGlzdFBheW1lbnRzIH0sXG4gICAgfSxcbiAgfSxcbiAgcm91dGVzOiB7XG4gICAgc2ltdWxhdGU6IG1ldGhvZCh7XG4gICAgICBERUZBVUxUOiBtZXRob2ROb3RBbGxvd2VkLFxuICAgIH0pLFxuICAgIC8qIHRyYW5zZmVyOiBtZXRob2Qoe1xuICAgICAgICAgICAgREVGQVVMVDogbWV0aG9kTm90QWxsb3dlZCxcbiAgICAgICAgICAgIFBPU1Q6IFt0cmFuc2Zlck9yZGVyXVxuICAgICAgICB9KSwgKi9cbiAgICB2QmFzZTogbWV0aG9kKHtcbiAgICAgIERFRkFVTFQ6IG1ldGhvZE5vdEFsbG93ZWQsXG4gICAgfSksXG4gIH0sXG59KVxuIl19