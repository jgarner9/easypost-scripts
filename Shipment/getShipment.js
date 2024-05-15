import { connectClient } from "../connectClient.js";

const getShipment = async (shipmentID) => {
  const client = connectClient();
  const shipment = client.Shipment.retrieve(shipmentID);
  return shipment;
};

export { getShipment };
