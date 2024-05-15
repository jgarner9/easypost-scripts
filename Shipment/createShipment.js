import { connectClient } from "../connectClient.js";

const createShipment = async (shipmentOptions) => {
  const client = connectClient();
  const shipment = await client.Shipment.create(shipmentOptions);
  return shipment;
};

export { createShipment };
