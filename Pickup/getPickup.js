import { connectClient } from "../connectClient.js";

const getPickup = async (pickupID) => {
  const client = connectClient();
  const pickup = await client.Pickup.retrieve(pickupID);
  return pickup;
};

export { getPickup };
