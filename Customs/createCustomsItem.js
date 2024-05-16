import { connectClient } from "../connectClient.js";

const createCustomsItem = async (options) => {
  const client = connectClient();
  const customsInfo = await client.CustomsItem.create({ options });
  return customsInfo;
};

export { createCustomsItem };
