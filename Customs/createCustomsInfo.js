import { connectClient } from "../connectClient.js";

const createCustomsInfo = (options) => {
  const client = connectClient();
  const customsInfo = client.CustomsInfo.create({ options });
  return customsInfo;
};

export { createCustomsInfo };
