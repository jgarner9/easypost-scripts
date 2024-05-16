import { connectClient } from "../connectClient.js";

const updateWebhook = async (webhookID, options) => {
  const client = connectClient();
  const webhook = await client.Webhook.update(webhookID, options);
  return webhook;
};

export { updateWebhook };
