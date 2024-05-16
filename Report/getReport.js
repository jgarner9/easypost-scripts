import { connectClient } from "../connectClient.js";

const getReport = async (reportID) => {
  const client = connectClient();
  const report = await client.Report.retrieve(reportID);
  return report;
};

export { getReport };
