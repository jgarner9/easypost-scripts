import { connectClient } from "../connectClient.js";

const createTracker = async (options) => {
  const client = connectClient();
  const tracker = await client.Tracker.create(options);
  return tracker;
};

export { createTracker };
