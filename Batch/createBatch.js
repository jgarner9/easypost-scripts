import { connectClient } from "../connectClient.js";

const createBatch = async (batchOptions) => {
  const client = connectClient();
  const batch = await client.Batch.create(batchOptions)
  return batch
};

export { createBatch };
