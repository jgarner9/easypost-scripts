import { connectClient } from "../connectClient.js";

const buyShipment = async (shipmentID, rate) => {
  const client = connectClient();
  const boughtShipment = await client.Shipment.buy(shipmentID, rate);
  return boughtShipment;
};

export { buyShipment };
