import { LRUCache, method, Service } from '@vtex/api'
import type { ParamsContext, RecorderState, ServiceContext } from '@vtex/api'

import { Clients } from './clients'
import { simulateOrder } from './middlewares/simulate'
import { listPayments } from './middlewares/master_data'
import { changeOrder } from './middlewares/change_order'
import { methodNotAllowed } from './middlewares/methods'
import { simulateOrderLatest } from './resolvers/simulate'
import { changeOrderLatest } from './resolvers/checkout'
import { listOrders } from './resolvers/oms'

import * as dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const TIMEOUT_MS = 10000

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })

metrics.trackCache('status', memoryCache)
// This is the configuration for clients available in `ctx.clients`.
/* const clients: ClientsConfig<Clients> = {
    // We pass our custom implementation of the clients bag, containing the Status client.
    implementation: Clients,
    options: {
        // All IO Clients will be initialized with these options, unless otherwise specified.
        default: {
            retries: 2,
            timeout: TIMEOUT_MS,
        },
        // This key will be merged with the default options and add this cache to our Status client.
        status: {
            memoryCache,
        },
    },
} */

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State {
    id: number
    data: string[]
  }

}

// Export a service that defines route handlers and client options.
export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: TIMEOUT_MS,
      },
    },
  },
  graphql: {
    resolvers: {
      Mutation: {
        simulateOrderLatest,
        changeOrder,
        changeOrderLatest,
        simulateOrder,
      },
      Query: { listOrders, listPayments },
    },
  },
  routes: {
    simulate: method({
      DEFAULT: methodNotAllowed,
    }),
    /* transfer: method({
            DEFAULT: methodNotAllowed,
            POST: [transferOrder]
        }), */
    vBase: method({
      DEFAULT: methodNotAllowed,
    }),
  },
})
