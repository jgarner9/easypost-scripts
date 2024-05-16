import { connectClient } from "../connectClient.js";

const createCustomsItem = () => {
  const client = connectClient();
  const customsInfo = client.CustomsItem.create({ options });
  return customsInfo;
};

export { createCustomsItem };
