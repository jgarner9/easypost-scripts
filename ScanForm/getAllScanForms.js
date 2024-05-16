import { connectClient } from "../connectClient.js";

const getAllScanForms = async (options) => {
  const client = connectClient();
  const scanForms = await client.ScanForm.all(options);
  return scanForms;
};

export { getAllScanForms };
