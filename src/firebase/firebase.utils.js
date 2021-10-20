import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAv69QAvf4yJCQD4n9svbkbul1TWZ_-b70",
  authDomain: "crwn-db-71ccb.firebaseapp.com",
  projectId: "crwn-db-71ccb",
  storageBucket: "crwn-db-71ccb.appspot.com",
  messagingSenderId: "791022195553",
  appId: "1:791022195553:web:6f6552d3f1cb7a1501eb20",
  measurementId: "G-CJSJBK4QWG",
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
