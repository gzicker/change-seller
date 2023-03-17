import type { CartSimulation } from '../typings/cart_simulation'


export const simulateOrderLatest = (
  _: any,
  { data }: { data: CartSimulation },
  { clients: { cartSimulationClient : cartSimulationClient  } }: Context
) => cartSimulationClient.simulateOrder(data)
