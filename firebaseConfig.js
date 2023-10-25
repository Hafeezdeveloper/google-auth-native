import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBMKiELVQd2L0_cvapQI4Oy_FJB59uTGBE",
    authDomain: "todoapp-c537c.firebaseapp.com",
    projectId: "todoapp-c537c",
    storageBucket: "todoapp-c537c.appspot.com",
    messagingSenderId: "319587140822",
    appId: "1:319587140822:web:c91d1f9110fd552c27b577",
    measurementId: "G-ZGG9QZ61YG"
  };

//   901566647672-9cs8ilschdmcj3ttf96t2lqnh67u9l3j.apps.googleusercontent.com

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
