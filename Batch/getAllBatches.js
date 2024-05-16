import { connectClient } from "../connectClient.js";

const getAllBatches = async (options) => {
  const client = connectClient()
  const batches = await client.Batch.all(options)
  return batches
};

export { getAllBatches };
