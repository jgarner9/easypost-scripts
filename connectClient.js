import EasyPostClient from "@easypost/api";
import { config } from "dotenv";

const connectClient = () => {
  config();
  return new EasyPostClient(process.env.EP_TEST_KEY);
};

export { connectClient };
