import { IncomingMessage, ServerResponse } from "http";
import { json, send } from "micro";
import uuid from "uuid/v4";
import cosmos, { Databases, Containers, Mode } from "../connectors/cosmos";
import errorHandler from "../utils/errorHandler";
import { v4 } from "uuid/interfaces";

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
    send(res, 500, errorHandler(500, new Error("Unable to create comment.")));
  }
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const body = await json(req);

    send(res, 200, body);

    const item = ({
      id: uuid(),
      date: new Date().toISOString(),
      edited: false,
      ...body
    } as unknown) as Comment;

    const response = await create(item, res);

    send(res, 200, response);
  } catch (error) {
    send(res, 400, errorHandler(400, new Error("Something went wrong.")));
  }
};
