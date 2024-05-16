import { connectClient } from "../connectClient.js";

const buyOrder = async (orderID, carrier, service) => {
  const client = connectClient();
  const order = await client.Order.buy(orderID, carrier, service);
  return order;
};

export { buyOrder };
