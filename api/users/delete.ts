import { IncomingMessage, ServerResponse } from "http";
import url from "url";

export default (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  console.log('delete called', req.url);

  try {
    let { query } = url.parse(req.url || "", true)
    res.end(JSON.stringify({ message: `Query Sent: ${query}` }));
  } catch (error) {
    res.end(JSON.stringify({
      message: 'Something went wrong.',
      trace: error,
    }));
  }
};
