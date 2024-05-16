import { connectClient } from "../connectClient.js";

const createPickup = async (options) => {
  const client = connectClient();
  const pickup = await client.Pickup.create(options);
  return pickup;
};

export { createPickup };
