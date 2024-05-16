import { connectClient } from "../connectClient.js";

const getAllInsurances = async (options) => {
  const client = connectClient();
  const insurances = await client.Insurance.all(options);
  return insurances;
};

export { getAllInsurances };
