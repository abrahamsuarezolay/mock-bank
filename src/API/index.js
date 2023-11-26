// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0f4daYdpHXTffpfb43mWsrf3pVI-K02A",
  authDomain: "mockbank-f67f8.firebaseapp.com",
  projectId: "mockbank-f67f8",
  storageBucket: "mockbank-f67f8.appspot.com",
  messagingSenderId: "187687114706",
  appId: "1:187687114706:web:6f1db293e4246b4649da0b",
  measurementId: "G-E8572R55Y0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
