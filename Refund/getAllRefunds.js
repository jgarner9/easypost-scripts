import { connectClient } from "../connectClient.js";

const getAllRefunds = async (options) => {
  const client = connectClient()
  const refunds = await client.Refund.all(options)
  return refunds
};

export { getAllRefunds };
