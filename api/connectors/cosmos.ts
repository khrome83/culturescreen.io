import { CosmosClient } from "@azure/cosmos";

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

const cosmos = (mode: Mode = Mode.Read) => {
  const endpoint = process.env.COSMOS_ENDPOINT || "";
  let masterKey = process.env.COSMOS_MASTERKEY_READ || "";

  if (mode === "write") {
    masterKey = process.env.COSMOS_MASTERKEY_READ_WRITE || "";
  }

  return new CosmosClient({ endpoint, auth: { masterKey } });
};

export { cosmos as default, Containers, Databases, Mode };
