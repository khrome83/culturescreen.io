import { IncomingMessage, ServerResponse } from "http";
import url from "url";
import { CosmosClient, SqlQuerySpec } from "@azure/cosmos";
import { send } from "micro";
import getOptions, { Containers, Databases, Mode } from "../connectors/cosmos";
import errorHandler from "../utils/errorHandler";

// TODO - Add persion check for posting deleting against the origin submissions
//        - Do we need submission id
//        - Have to trace this back to the organization

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

    // Fetch Datbase Item
    const { result: results = [] } = await client
      .database(Databases.Primary)
      .container(Containers.Comments)
      .items.query(querySpec)
      .toArray();

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
    } else if (results.length > 1) {
      return send(
        res,
        500,
        errorHandler(
          500,
          new Error(
            `Data corruption issue on record(s) found matching id '${
              query.id
            }'.`
          )
        )
      );
    }

    // Replace Database Item with Delete Flag
    const itemBody = results[0];
    // itemBody.deleted = true;

    console.log("Deleting ", itemBody.id);

    const { body } = await client
      .database(Databases.Primary)
      .container(Containers.Comments)
      .item(itemBody.id, "/id")
      .delete(itemBody);

    return send(res, 200, body);
  } catch (error) {
    console.log(error);
    return send(
      res,
      500,
      errorHandler(500, new Error("Unable to delete comment."))
    );
  }
};
