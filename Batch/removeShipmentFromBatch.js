import { connectClient } from "../connectClient.js";

const removeShipmentFromBatch = async (batchID, shipments) => {
  const client = connectClient();
  const batch = await client.Batch.removeShipments(batchID, shipments);
  return batch;
};

export { removeShipmentFromBatch };
