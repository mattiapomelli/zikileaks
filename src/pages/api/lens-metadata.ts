import {
  PublicationMetadataV2Input,
  PublicationMainFocus,
  PublicationMetadataDisplayTypes,
} from "@lens-protocol/client";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import { lensClient } from "@utils/lens-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    console.log("Data: ", req.body);

    const title = req.query.title?.toString();
    const description = req.query.description?.toString();
    const zkAddress = req.query.zkAddress?.toString();
    const pubKey = req.query.pubKey?.toString();

    if (!title || !description || !zkAddress || !pubKey) {
      return res.status(400).send({ message: "Missing query params" });
    }

    // Create and validate Post metadata
    const metadata: PublicationMetadataV2Input = {
      content: description,
      metadata_id: uuidv4(),
      name: title,
      description: description,
      version: "2.0.0",
      mainContentFocus: PublicationMainFocus.TextOnly,
      locale: "en-US",
      tags: ["zikileaks"],
      // attributes: [],
      attributes: [
        {
          traitType: "zkAddress",
          value: zkAddress,
          displayType: PublicationMetadataDisplayTypes.String,
        },
        {
          traitType: "pubKey",
          value: pubKey,
          displayType: PublicationMetadataDisplayTypes.String,
        },
      ],
    };

    const validateResult = await lensClient.publication.validateMetadata(
      metadata,
    );

    if (!validateResult.valid) {
      return res
        .status(500)
        .send({ message: `Metadata not valid: ${validateResult.reason}` });
    }

    return res.status(200).send({ metadata });
  } else {
    return res.status(405).send({ message: "Method not allowed" });
  }
}
