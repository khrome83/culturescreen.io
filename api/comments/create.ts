import { IncomingMessage, ServerResponse } from "http";
import { CosmosClient } from "@azure/cosmos";
import { json, send } from "micro";
import uuid from "uuid/v4";
import { v4 } from "uuid/interfaces";
import getOptions, { Databases, Containers, Mode } from "../connectors/cosmos";
import errorHandler from "../utils/errorHandler";

interface Reaction {
  type: string;
  author: v4;
}

interface Comment {
  id: v4;
  author: v4;
  video: v4;
  comment: string;
  date: string;
  edited: boolean;
  editedDate?: string;
  reactions?: Array<Reaction>;
}

const createComment = (body: Partial<Comment>) => {
  return {
    id: uuid(),
    date: new Date().toISOString(),
    edited: false,
    ...body
  } as Comment;
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
