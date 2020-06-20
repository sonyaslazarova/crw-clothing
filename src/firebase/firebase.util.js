import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDet_cXziAzlF1E0bWFTfvB_q1DlHxwBLA",
  authDomain: "crw-db-6e0d2.firebaseapp.com",
  databaseURL: "https://crw-db-6e0d2.firebaseio.com",
  projectId: "crw-db-6e0d2",
  storageBucket: "crw-db-6e0d2.appspot.com",
  messagingSenderId: "528945170610",
  appId: "1:528945170610:web:712b2427f6108391eea1ab",
  measurementId: "G-S6T9GTXY09"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;