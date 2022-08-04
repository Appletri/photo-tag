import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {

  apiKey: "AIzaSyBFdRxX8UUrKJPqQQXeE5zNLWZFnqujZIk",

  authDomain: "photo-tag-2ea7d.firebaseapp.com",

  projectId: "photo-tag-2ea7d",

  storageBucket: "photo-tag-2ea7d.appspot.com",

  messagingSenderId: "643261747990",

  appId: "1:643261747990:web:08af2c3f9627a766387637",

  measurementId: "G-2V8KTM0NEB"

};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

async function Database() {
  const cheatSheetCol = collection(db, 'targets');
  const cheatSheetSnap = await getDocs(cheatSheetCol);
  const cheatSheet = cheatSheetSnap.docs.map(doc => doc.data());
  return cheatSheet;
}


export default Database;