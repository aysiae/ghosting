// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey: string | undefined = process.env.REACT_APP_FIREBASE_API_KEY;
const authDomain: string | undefined =
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const projectId: string | undefined = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const storageBucket: string | undefined =
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const messagingSenderId: string | undefined =
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const appId: string | undefined = process.env.REACT_APP_FIREBASE_APP_ID;
const measurementId: string | undefined =
  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;

console.log(apiKey);

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: apiKey,

  authDomain: authDomain,

  projectId: projectId,

  storageBucket: storageBucket,

  messagingSenderId: messagingSenderId,

  appId: appId,

  measurementId: measurementId,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// const analytics = getAnalytics(app);
