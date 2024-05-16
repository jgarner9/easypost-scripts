import { connectClient } from "../connectClient.js";

const getCustomsItem = async (customsItemID) => {
  const client = connectClient()
  const customsItem = await client.CustomsItem.retrieve(customsItemID)
  return customsItem
};

export { getCustomsItem };
