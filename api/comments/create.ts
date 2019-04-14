import parse from "co-body";
import { IncomingMessage, ServerResponse } from "http";
import uuid from "uuid/v4";
import cosmos, { Databases, Containers, Mode } from "../connectors/cosmos";
import errorHandler from "../utils/errorHandler";
import { v4, v4Buffer } from "uuid/interfaces";

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

const create = async (itemBody: Comment, res: ServerResponse) => {
  const client = cosmos(Mode.Read);

  try {
    const { item } = await client
      .database(Databases.Primary)
      .container(Containers.Comments)
      .items.create(itemBody);

    return item;
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(errorHandler(500, new Error("Unable to create comment.")));
  }
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const body = await parse.json(req);

    body.id = uuid();
    body.date = new Date().toISOString();
    body.edited = false;

    const item = await create(body, res);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(item));
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(errorHandler(400, new Error("Something went wrong.")));
  }
};
