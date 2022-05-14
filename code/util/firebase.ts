import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import withFirebaseAuth from "react-with-firebase-auth"

const firebaseConfig = {
  apiKey: "AIzaSyA7-M7ylhSPp11ji6VQSQP-IxSMIBIFATU",
  authDomain: "trends-final-project.firebaseapp.com",
  projectId: "trends-final-project",
  storageBucket: "trends-final-project.appspot.com",
  messagingSenderId: "944691962457",
  appId: "1:944691962457:web:a11cba2e321fe1438ec748"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const auth = getAuth(app);
const db = getFirestore(app)

const providers = {
  googleProvider: new GoogleAuthProvider(),
}

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
})

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider)
}

const signOutFirebase = () => {
  signOut(auth)
}

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
}
