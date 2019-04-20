import * as firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
const config = {
  apiKey: "AIzaSyB2XdBxDMxxnC0xreTZ9VfKgXmbbe-UNv0",
  authDomain: "culturescreen-fed28.firebaseapp.com",
  databaseURL: "https://culturescreen-fed28.firebaseio.com",
  projectId: "culturescreen-fed28",
  storageBucket: "culturescreen-fed28.appspot.com",
  messagingSenderId: "952106448816"
};
const db = !firebase.apps.length ? firebase.initializeApp(config).firestore() : firebase.app().firestore();

// Export types that exists in Firestore
const { Timestamp, GeoPoint } = firebase.firestore;

export { db as default, Timestamp, GeoPoint };
