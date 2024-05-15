import { connectClient } from "../connectClient.js";

const addShipmentToBatch = async (batchID, shipments) => {
  const client = connectClient();
  const batch = await client.Batch.addShipments(batchID, shipments)
  return batch
};

export { addShipmentToBatch };
