enum Containers {
  Candidates = "candidates",
  Comments = "comments",
  Organizations = "organizations",
  Positions = "positions",
  Submissions = "submissions",
  Users = "users"
}

enum Databases {
  Primary = "culturescreen-01"
}

enum Mode {
  Read = "read",
  Write = "write"
}

interface Options {
  endpoint: string;
  auth: {
    masterKey: string;
  };
}

const getOptions = (mode: Mode = Mode.Read): Options => {
  const endpoint = process.env.COSMOS_ENDPOINT || "";
  let masterKey = process.env.COSMOS_MASTERKEY_READ || "";

  if (mode === "write") {
    masterKey = process.env.COSMOS_MASTERKEY_READ_WRITE || "";
  }

  return { endpoint, auth: { masterKey } };
};

export { getOptions as default, Containers, Databases, Mode };
