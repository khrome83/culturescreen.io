import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { BADFAMILY } from "dns";

const fromBase64 = (val: string) => Buffer.from(val, 'base64').toString();

// Get Firestore and Fireauth Configuration
const config = JSON.parse(fromBase64(process.env.GCLOUD_CREDENTIALS));

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const GithubProvider = new firebase.auth.GithubAuthProvider();
const MicrosoftProvider = new firebase.auth.OAuthProvider("microsoft.com");
const auth = firebase.auth();
const DB = firebase.firestore();

// Export types that exists in Firestore
const { Timestamp, GeoPoint } = firebase.firestore;

export { firebase as default, GoogleProvider, GithubProvider, MicrosoftProvider, auth, DB, Timestamp, GeoPoint };
