import { IncomingMessage, ServerResponse } from "http";
import url from "url";
import { CosmosClient, SqlQuerySpec } from "@azure/cosmos";
import { send } from "micro";
import getOptions, { Containers, Databases, Mode } from "../connectors/cosmos";
import errorHandler from "../utils/errorHandler";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const client = new CosmosClient(getOptions(Mode.Read));

  try {
    const { query } = url.parse(req.url || "", true);

    console.log("queryid", query.id);

    const querySpec = {
      query: "SELECT * FROM root r WHERE r.video = @id ORDER BY r.date DESC",
      parameters: [
        {
          name: "@id",
          value: query.id
        }
      ]
    } as SqlQuerySpec;

    console.log("queryspec", querySpec);

    const { result: results = [] } = await client
      .database(Databases.Primary)
      .container(Containers.Comments)
      .items.query(querySpec, { enableCrossPartitionQuery: true })
      .toArray();

    console.log(results);

    // Validate Return
    if (results.length === 0) {
      return send(
        res,
        404,
        errorHandler(
          404,
          new Error(`No record found matching id '${query.id}'.`)
        )
      );
    }

    return send(res, 200, results);
  } catch (error) {
    console.log(error);
    return send(
      res,
      500,
      errorHandler(500, new Error("Unable to get list of comments."))
    );
  }
};
