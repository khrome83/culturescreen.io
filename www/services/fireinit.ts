import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { BADFAMILY } from "dns";

// const fromBase64 = (val: string) => Buffer.from(val, 'base64').toString();
const fromBase64 = (val: string): string => {
  console.log(process.env.GCLOUD_CREDENTIALS);
  return window.atob(val).toString();
}

// Get Firestore and Fireauth Configuration
// const config = JSON.parse(fromBase64(process.env.GCLOUD_CREDENTIALS));

const config = {
  apiKey: "AIzaSyB2XdBxDMxxnC0xreTZ9VfKgXmbbe-UNv0",
  authDomain: "culturescreen-fed28.firebaseapp.com",
  databaseURL: "https://culturescreen-fed28.firebaseio.com",
  projectId: "culturescreen-fed28",
  storageBucket: "culturescreen-fed28.appspot.com",
  messagingSenderId: "952106448816"
};

console.log("GCLOUD", process.env.gCloudCredentials);

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const GithubProvider = new firebase.auth.GithubAuthProvider();
const MicrosoftProvider = new firebase.auth.OAuthProvider("microsoft.com");
const auth = firebase.auth();
const DB = firebase.firestore();

// Export types that exists in Firestore
const { Timestamp, GeoPoint } = firebase.firestore;

export { firebase as default, GoogleProvider, GithubProvider, MicrosoftProvider, auth, DB, Timestamp, GeoPoint };
