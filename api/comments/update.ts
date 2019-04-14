import { IncomingMessage, ServerResponse } from "http";

export default (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "updated comment" }));
};
