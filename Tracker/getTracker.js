import { connectClient } from "../connectClient.js";

const getTracker = async (trackerID) => {
  const client = connectClient();
  const tracker = await client.Tracker.retrieve(trackerID);
  return tracker;
};

export { getTracker };
