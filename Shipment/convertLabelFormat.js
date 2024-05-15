import { connectClient } from "../connectClient.js";

const convertLabelFormat = async (shipment, fileType) => {
  const client = connectClient();
  const convertedShipment = await client.Shipment.convertLabelFormat(
    shipment.id,
    fileType
  );
  return convertedShipment;
};

export { convertLabelFormat };
