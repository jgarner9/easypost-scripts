import { connectClient } from "../connectClient.js";

const getRate = async (options) => {
  const client = connectClient();
  const rate = await client.BetaRate.retrieveStatelessRates(options);
  return rate;
};

export { getRate };
