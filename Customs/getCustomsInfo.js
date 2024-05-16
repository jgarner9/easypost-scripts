import { connectClient } from "../connectClient.js";

const getCustomsInfo = async (customsInfoID) => {
  const client = connectClient()
  const customsInfo = await client.CustomsInfo.retrieve(customsInfoID)
  return customsInfo
};

export { getCustomsInfo };
