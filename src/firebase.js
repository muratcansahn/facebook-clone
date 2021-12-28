import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXKmEjSz030vNGuT9e0ZhgLUXyxBXI6eE",
  authDomain: "facebook-clone-b4d1f.firebaseapp.com",
  projectId: "facebook-clone-b4d1f",
  storageBucket: "facebook-clone-b4d1f.appspot.com",
  messagingSenderId: "145797979015",
  appId: "1:145797979015:web:89d1eba70e0f969400d122",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
