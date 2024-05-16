import { connectClient } from "../connectClient.js";

const getAllPickups = async (options) => {
  const client = connectClient();
  const pickups = await client.Pickup.all(options);
  return pickups;
};

export { getAllPickups };
