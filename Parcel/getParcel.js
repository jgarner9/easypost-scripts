import { connectClient } from "../connectClient.js";

const getParcel = async (parcelID) => {
  const client = connectClient();
  const parcel = client.Parcel.retrieve(parcelID);
  return parcel;
};

export { getParcel };
