import { connectClient } from "../connectClient.js";

const getCarrierMetadata = async (carriers, metadata) => {
  const client = connectClient();
  const carrierMetadata = await client.CarrierMetadata.retrieve(
    carriers,
    metadata
  );
  return carrierMetadata;
};

export { getCarrierMetadata };
