import { IncomingMessage, ServerResponse } from "http";
import { CosmosClient } from "@azure/cosmos";
import { json, send } from "micro";
import uuid from "uuid/v4";
import getOptions, { Containers, Databases, Mode } from "../connectors/cosmos";
import errorHandler from "../utils/errorHandler";
import { Video } from "../types";

// TODO - Add persion check for posting author against the origin submissions
//        - Do we need submission id
//        - Have to trace this back to the organization
// TODO - Validate incoming post object has the minimum required content in body
//        - Is there a library for this?
// TODO - Validate item does not exist before creating, or use "createIfNotExists"

const createComment = (body: Partial<Video.Comment>): Video.Comment => {
  return {
    id: uuid(),
    date: new Date().toISOString(),
    edited: false,
    ...body
  } as Video.Comment;
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  const client = new CosmosClient(getOptions(Mode.Write));

  try {
    const body = await json(req);
    const itemBody = createComment(body);
    const { item } = await client
      .database(Databases.Primary)
      .container(Containers.Comments)
      .items.create(itemBody);

    send(res, 200, itemBody);
  } catch (error) {
    send(res, 500, errorHandler(500, new Error("Unable to create comment.")));
  }
};
