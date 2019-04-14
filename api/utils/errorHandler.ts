import * as statusCodes from "./statusCodes.json";

interface ErrorOutput {
  statusCode: number;
  name: string;
  message: string;
  code?: string;
  stack?: string;
}

interface Output {
  error: ErrorOutput;
}

export default (status: number, err: Error) => {
  const debug = process.env.NODE_ENV === "development";
  const output: Output = {
    error: {
      statusCode: status,
      name: (<any>statusCodes)[status],
      message: err.message
    }
  };

  if (debug) {
    output.error.code = err.name || "";
    output.error.stack = err.stack || "";
  }

  return JSON.stringify(output);
};
