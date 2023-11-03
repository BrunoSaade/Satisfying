import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import * as firebaseAuth from 'firebase/auth';
const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARhEMBgRFLx3XMaExSlER7ZhYRYx_Ocns",
  authDomain: "satisfying-80f38.firebaseapp.com",
  projectId: "satisfying-80f38",
  storageBucket: "satisfying-80f38.appspot.com",
  messagingSenderId: "962164732937",
  appId: "1:962164732937:web:e66567acdd0dadcd7834d8"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: reactNativePersistence(ReactNativeAsyncStorage) });
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
const storage = getStorage(app);

export { app, auth, db, storage };
