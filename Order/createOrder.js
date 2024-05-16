import { connectClient } from "../connectClient.js";

const createOrder = async (options) => {
  const client = connectClient();
  const order = await client.Order.create(options);
  return order;
};

export { createOrder };
