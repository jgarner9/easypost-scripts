import { connectClient } from "../connectClient.js";

const retrieveOrder = async (orderID) => {
  const client = connectClient();
  const order = await client.Order.retrieve(orderID);
  return order;
};

export { retrieveOrder };
