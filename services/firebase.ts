// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// const persistence = getReactNativePersistence(ReactNativeAsyncStorage);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxDoAcjsWMJxvolcqgtkkarN91NIXPHvQ",
  authDomain: "mono-dd2ec.firebaseapp.com",
  projectId: "mono-dd2ec",
  storageBucket: "mono-dd2ec.firebasestorage.app",
  messagingSenderId: "259195706929",
  appId: "1:259195706929:web:e7313a3072ad36bfadff10",
  measurementId: "G-1RCWN6XG66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signOut() {
  return signOut();
}
