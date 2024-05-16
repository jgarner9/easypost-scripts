import { connectClient } from "../connectClient.js";

const getScanForm = async (scanFormID) => {
  const client = connectClient();
  const scanForm = await client.ScanForm.retrieve(scanFormID);
  return scanForm;
};

export { getScanForm };
