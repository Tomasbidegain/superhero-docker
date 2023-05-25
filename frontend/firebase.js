// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import {v4} from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPjmZ2EVjpUyVjG8t0UwItZKB3fHxqRzE",
  authDomain: "super-heroes-c9c04.firebaseapp.com",
  projectId: "super-heroes-c9c04",
  storageBucket: "super-heroes-c9c04.appspot.com",
  messagingSenderId: "101300510624",
  appId: "1:101300510624:web:86d2051c2195abfec10ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function uploadFile(file) {
  const storageRef = ref(storage, v4())
  const data = await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef).then(url => url)
  return [data, url];
}