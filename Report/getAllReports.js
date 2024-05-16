import { connectClient } from "../connectClient.js";

const getAllReports = async (options) => {
  const client = connectClient();
  const reports = await client.Report.all(options);
  return reports;
};

export { getAllReports };
