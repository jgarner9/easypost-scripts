import { connectClient } from "../connectClient.js";

const cancelPickup = async (pickupID) => {
  const client = connectClient();
  const pickup = await client.Pickup.cancel(pickupID);
  return pickup;
};

export { cancelPickup };
