import { IncomingMessage, ServerResponse } from "http";
import url from "url";
import { CosmosClient, SqlQuerySpec } from "@azure/cosmos";
import { send } from "micro";
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

export default async (req: IncomingMessage, res: ServerResponse) => {
  const client = new CosmosClient(getOptions(Mode.Write));

  try {
    const { query } = url.parse(req.url || "", true);

    const querySpec = {
      query: "SELECT * FROM root r WHERE r.id = @id",
      parameters: [
        {
          name: "@id",
          value: query.id
        }
      ]
    } as SqlQuerySpec;

    const { result: results = [] } = await client
      .database(Databases.Primary)
      .container(Containers.Comments)
      .items.query(querySpec)
      .toArray();

    send(res, 200, results);
  } catch (error) {
    send(res, 500, errorHandler(500, new Error("Unable to create comment.")));
  }
};
