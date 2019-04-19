import { IncomingMessage, ServerResponse } from "http";
import { send } from "micro";
import errorHandler from "../utils/errorHandler";

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const results = [
      {
        id: 1,
        title: "First Post",
        description: "Body of First Post"
      },
      {
        id: 2,
        title: "Second Post",
        description: "Body of Second Post"
      },
      {
        id: 3,
        title: "Third Post",
        description: "Body of Third Post"
      },
      {
        id: 4,
        title: "Fourth Post",
        description: "Body of Fourth Post"
      },
      {
        id: 5,
        title: "Fifth Post",
        description: "Body of Fifth Post"
      },
    ];

    return send(res, 200, results);
  } catch (error) {
    return send(
      res,
      500,
      errorHandler(500, new Error("Unable to get list of Posts."))
    );
  }
};
