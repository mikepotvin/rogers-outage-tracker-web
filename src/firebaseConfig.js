// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "rogers-outage-tracker.firebaseapp.com",
  databaseURL: "https://rogers-outage-tracker-default-rtdb.firebaseio.com",
  projectId: "rogers-outage-tracker",
  storageBucket: "rogers-outage-tracker.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
