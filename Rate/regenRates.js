import { connectClient } from "../connectClient.js";

const regenRate = async (shipmentID) => {
  const client = connectClient();
  const rates = await client.Shipment.regenerateRates(shipmentID);
  return rates;
};

export { regenRate };
