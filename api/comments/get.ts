import { IncomingMessage, ServerResponse } from "http";
import url from "url";
import { CosmosClient, SqlQuerySpec } from "@azure/cosmos";
import { send } from "micro";
import getOptions, { Containers, Databases, Mode } from "../connectors/cosmos";
import errorHandler from "../utils/errorHandler";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const client = new CosmosClient(getOptions(Mode.Write));

  try {
    const { query } = url.parse(req.url || "", true);

    const querySpec = {
      query: "SELECT * FROM root r WHERE r.id = @id AND r.deleted != @deleted",
      parameters: [
        {
          name: "@id",
          value: query.id
        },
        {
          name: "@deleted",
          value: true
        }
      ]
    } as SqlQuerySpec;

    const { result: results = [] } = await client
      .database(Databases.Primary)
      .container(Containers.Comments)
      .items.query(querySpec)
      .toArray();

    // Validate Return
    if (results.length === 0) {
      send(
        res,
        404,
        errorHandler(
          404,
          new Error(`No record found matching id '${query.id}'.`)
        )
      );
    }

    send(res, 200, results);
  } catch (error) {
    send(res, 500, errorHandler(500, new Error("Unable to create comment.")));
  }
};
