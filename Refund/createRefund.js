import { connectClient } from "../connectClient.js";

const createRefund = async (options) => {
  const client = connectClient();
  const refund = await client.Refund.create(options);
  return refund;
};

export { createRefund };
