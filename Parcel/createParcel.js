import { connectClient } from "../connectClient.js";

const createParcel = async (parcelOptions) => {
  const client = connectClient();
  const parcel = client.Parcel.create(parcelOptions);
  return parcel;
};

export { createParcel };
