import EasyPostClient from "@easypost/api";
import { config } from "dotenv";

const connectClient = async () => {
  config();
  return new EasyPostClient(process.env.EP_TEST_KEY);
};

export { connectClient };
