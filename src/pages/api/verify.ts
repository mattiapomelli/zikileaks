import * as ed from "@noble/ed25519";
import { decodeAddress } from "@railgun-community/engine";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  title: string;
  description: string;
  zkAddress: string;
  pubKey: string;
}

interface ReqBody {
  signature: string;
  data: Data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { signature, data } = req.body as ReqBody;

    // Verify message
    const message = Buffer.from(JSON.stringify(data)).toString("hex");
    const isValid = await ed.verifyAsync(signature, message, data.pubKey);

    // Verify address corresponging to the public key is the same as the zkAddress in the data
    const addressData = decodeAddress(data.zkAddress);

    const pubKeyHex = Buffer.from(addressData.viewingPublicKey).toString("hex");
    const isVerified = isValid && pubKeyHex === data.pubKey;

    if (!isVerified) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    return res.status(200).send({ message: "Ok" });
  } else {
    return res.status(405).send({ message: "Method not allowed" });
  }
}
