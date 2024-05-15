import { connectClient } from "../connectClient.js";

const createBatch = (batchOptions) => {
  const client = connectClient();
  const batch = client.Batch.create(batchOptions)
  return batch
};

export { createBatch };
