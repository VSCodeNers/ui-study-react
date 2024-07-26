import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_F_APIKEY,
  authDomain: process.env.REACT_APP_F_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_F_DATABASE_URL,
  projectId: process.env.REACT_APP_F_PROJECT_ID,
  storageBucket: process.env.REACT_APP_F_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_F_MSG_SENDER_ID,
  appId: process.env.REACT_APP_F_APPID,
  measurementId: process.env.REACT_APP_F_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export { app, db };