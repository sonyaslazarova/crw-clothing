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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
        console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
