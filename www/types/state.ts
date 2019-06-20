import { Person, User, Profile, UserData } from "~/types";

export interface RootState {
  people: Person[];
  users: User[];
}

export interface UserState {
  user: UserData;
}

export interface ProfileState {
  profile: object | Profile;
}

export interface OverPanelState {
  overpanelVisible: boolean;
  overpanelComponent: null | string;
}

export interface EmailRegistration {
  email: string;
  password: string;
  bio: string;
}
export interface EmailLogin {
  email: string;
  password: string;
}
