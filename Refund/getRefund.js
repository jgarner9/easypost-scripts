import { connectClient } from "../connectClient.js";

const getRefund = async (refundID) => {
  const client = connectClient();
  const refund = client.Refund.retrieve(refundID);
  return refund;
};

export { getRefund };
