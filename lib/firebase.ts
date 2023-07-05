import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.SENDER_ID,
//   appId: process.env.APP_ID
// };
const firebaseConfig = {
  apiKey: 'AIzaSyD6IjvR5mOheiD1J65V6x8jF2hvtq559gQ',
  authDomain: 'metrocondo-d4898.firebaseapp.com',
  projectId: 'metrocondo-d4898',
  storageBucket: 'metrocondo-d4898.appspot.com',
  messagingSenderId: '355800096306',
  appId: '1:355800096306:web:02e7f97c2f6657b3f0a62b'
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}