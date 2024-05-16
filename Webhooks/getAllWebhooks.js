import { connectClient } from "../connectClient.js";

const getAllWebhooks = async (options) => {
  const client = connectClient();
  const webhooks = await client.Webhook.all(options);
  return webhooks;
};

export { getAllWebhooks };
