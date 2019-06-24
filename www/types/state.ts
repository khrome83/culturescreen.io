import { Person, User, Profile, UserData, AuthError } from "~/types";

export interface RootState {
  people: Person[];
  users: User[];
}

export interface UserState {
  user: UserData;
  authError?: AuthError
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
