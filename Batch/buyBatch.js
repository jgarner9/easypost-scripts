import { connectClient } from "../connectClient.js";

const buyBatch = async (batchID) => {
  const client = connectClient();
  const batch = await client.Batch.buy(batchID)
  return batch
};

export { buyBatch };
