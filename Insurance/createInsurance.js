import { connectClient } from "../connectClient.js";

const createInsurance = async (options) => {
  const client = connectClient();
  const insurance = await client.Insurance.create(options);
  return insurance;
};

export { createInsurance };
