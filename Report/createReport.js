import { connectClient } from "../connectClient.js";

const createReport = async (options) => {
  const client = connectClient();
  const report = await client.Report.create(options);
  return report;
};

export { createReport };
