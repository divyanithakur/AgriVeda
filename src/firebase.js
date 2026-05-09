import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Using dummy config for the upgrade as requested
const firebaseConfig = {
  apiKey: "AIzaSyDummyKey",
  authDomain: "agriveda-dummy.firebaseapp.com",
  projectId: "agriveda-dummy",
  storageBucket: "agriveda-dummy.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
