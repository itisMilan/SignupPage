import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app=firebase.initializeApp({
  apiKey: "AIzaSyCcas1w8wLx6t1oB5ArEpL-5TESL2-JpLc",

  authDomain: "auth-development-f22f7.firebaseapp.com",

  projectId: "auth-development-f22f7",

  storageBucket: "auth-development-f22f7.appspot.com",

  messagingSenderId: "380939944834",

  appId: "1:380939944834:web:590e23ed9405006a3a459b"

  
})
export const auth=app.auth();
export default app;