import { connectClient } from "../connectClient.js";

const getAddress = async (addressID) => {
  const client = connectClient()
  const address = await client.Address.retrieve(addressID)
  return address
};

export { getAddress };
