import { connectClient } from "../connectClient.js";

const createWebhook = async (options) => {
  const client = connectClient();
  const webhook = await client.Webhook.create(options);
  return webhook;
};

export { createWebhook };
