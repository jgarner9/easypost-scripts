import { connectClient } from "../connectClient.js";

const createScanForm = async (options) => {
  const client = connectClient();
  const scanForm = await client.ScanForm.create(options);
  return scanForm;
};

export { createScanForm };
