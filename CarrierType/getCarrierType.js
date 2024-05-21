import { connectClient } from "../connectClient.js";

//TODO: return test credentials as well
const getCarrierType = async (carrierName) => {
  const client = connectClient();
  const carrierType = await client.CarrierType.all();
  let carrierCredentials;
  carrierType.forEach((carrier) => {
    if (carrier.readable == carrierName) {
      carrierCredentials = Object.keys(carrier.fields.credentials);
    }
  });
  return carrierCredentials || "invalid carrier name";
};

export { getCarrierType };
