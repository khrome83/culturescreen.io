enum Mode {
  Read = "read",
  Write = "write"
}

enum Databases {
  Primary = "culturescreen-01"
}

enum Containers {
  Candidates = "candidates",
  Comments = "comments",
  Organizations = "organizations",
  Positions = "positions",
  Submissions = "submissions",
  Users = "users"
}

const getOptions = (mode: Mode = Mode.Read) => {
  const endpoint = process.env.COSMOS_ENDPOINT || "";
  let masterKey = process.env.COSMOS_MASTERKEY_READ || "";

  if (mode === "write") {
    masterKey = process.env.COSMOS_MASTERKEY_READ_WRITE || "";
  }

  return { endpoint, auth: { masterKey } };
};

export { getOptions as default, Containers, Databases, Mode };
