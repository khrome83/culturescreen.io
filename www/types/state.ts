import { Person, User } from "~/types";

export interface RootState {
  people: Person[];
  users: User[];
}

export interface OverPanelState {
  overpanelVisible: boolean;
  overpanelComponent: null | string;
}
