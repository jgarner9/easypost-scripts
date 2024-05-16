import { connectClient } from "../connectClient.js";

const buyPickup = async (pickupID, carrier, service) => {
  const client = connectClient();
  const pickup = await client.Pickup.buy(pickupID, carrier, service);
  return pickup;
};

export { buyPickup };
