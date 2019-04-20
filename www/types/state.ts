import { Person, User } from "~/types";

export interface RootState {
  people: Person[];
  users: User[];
}
