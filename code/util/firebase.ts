import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA7-M7ylhSPp11ji6VQSQP-IxSMIBIFATU",
  authDomain: "trends-final-project.firebaseapp.com",
  projectId: "trends-final-project",
  storageBucket: "trends-final-project.appspot.com",
  messagingSenderId: "944691962457",
  appId: "1:944691962457:web:a11cba2e321fe1438ec748"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
