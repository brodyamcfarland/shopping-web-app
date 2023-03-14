import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
     apiKey: process.env.FIREBASE_API_KEY,
     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
     projectId: process.env.FIREBASE_PROJECT_ID,
     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
     messegingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
     appId: process.env.FIREBASE_APP_ID,
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
