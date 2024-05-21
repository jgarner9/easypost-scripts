import EasyPostClient from "@easypost/api";
import { config } from "dotenv";

const connectClient = () => {
  config();
  // return new EasyPostClient(process.env.EP_TEST_KEY);
  return new EasyPostClient(process.env.EP_PROD_KEY);
};

export { connectClient };
