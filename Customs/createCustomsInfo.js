import { connectClient } from "../connectClient.js";

const createCustomsInfo = async (options) => {
  const client = connectClient();
  const customsInfo = await client.CustomsInfo.create({ options });
  return customsInfo;
};

export { createCustomsInfo };
