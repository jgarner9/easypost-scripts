import { connectClient } from "../connectClient.js";

const refundInsurance = async (insuranceID) => {
  const client = connectClient();
  const insurance = await client.Insurance.refund(insuranceID);
  return insurance;
};

export { refundInsurance };
