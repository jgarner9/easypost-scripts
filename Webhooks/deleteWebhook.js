import { connectClient } from "../connectClient.js";

const deleteWebhook = async (webhookID) => {
  const client = connectClient();
  const webhook = await client.Webhook.delete(webhookID);
  return webhook;
};

export { deleteWebhook };
