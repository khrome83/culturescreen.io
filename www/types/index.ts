export * from './state';

export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  contact: Contact;
  gender: string;
  ip_address: string;
  avatar: string;
  address: Address;
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  favoriteBook: string;
  createdAt: string;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Address {
  city: string;
  country: string;
  postalCode: string;
  state: string;
  street: string;
}

export interface Profile {
  bio: string;
}

export interface TokenManager {
  apiKey: string;
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export interface ProviderData {
  uid: string;
  displayName: string;
  providerId: string;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
}

export interface UserData {
  uid: string;
  apiKey: string;
  appName: string;
  authDomain: string;
  createdAt: string;
  displayName: string;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  lastLoginAt: string;
  phoneNumber: string | null;
  photoURL: string | null;
  redirectEventId: string | null;
  stsTokenManger: TokenManager;
  providerData: ProviderData[];
  admin: boolean;
}

export interface AuthError {
  code: string;
  message: string;
}

export interface ServerErrorMsg {
  target: string;
  message: string;
}
