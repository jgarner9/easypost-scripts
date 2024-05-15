import { connectClient } from "../connectClient.js";

const getAllShipments = async (shipmentsOptions) => {
  const client = connectClient();
  const shipments = await client.Shipment.all(shipmentsOptions)
  return shipments
};

export { getAllShipments };
