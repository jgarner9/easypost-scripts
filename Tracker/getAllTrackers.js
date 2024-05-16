import { connectClient } from "../connectClient.js";

const getAllTrackers = async (options) => {
  const client = connectClient();
  const trackers = await client.Tracker.all(options);
  return trackers;
};

export { getAllTrackers };
