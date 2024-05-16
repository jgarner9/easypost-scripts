import { connectClient } from "../connectClient.js";

const getWebhook = async (webhookID) => {
  const client = connectClient();
  const webhook = await client.Webhook.retrieve(webhookID);
  return webhook;
};

export { getWebhook };
