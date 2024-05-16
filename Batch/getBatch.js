import { connectClient } from "../connectClient.js";

const getBatch = async (batchID) => {
  const client = connectClient();
  const batch = await client.Batch.retrieve(batchID);
  return batch;
};

export { getBatch };
