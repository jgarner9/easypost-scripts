import { connectClient } from "../connectClient.js";

const createAddress = async (addressOptions) => {
  const client = connectClient()

  const address = await client.Address.create(addressOptions)

  return address
};

export { createAddress };
