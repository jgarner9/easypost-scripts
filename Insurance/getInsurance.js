import { connectClient } from "../connectClient.js";

const getInsurance = async (insuranceID) => {
  const client = connectClient();
  const insurance = await client.Insurance.retrieve(insuranceID);
  return insurance;
};

export { getInsurance };
