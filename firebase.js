import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCIHjO3aKeKbmTruGL1VigSPamT5vp9_Gg',
  authDomain: 'facebook-v2-943ce.firebaseapp.com',
  projectId: 'facebook-v2-943ce',
  storageBucket: 'facebook-v2-943ce.appspot.com',
  messagingSenderId: '62662163450',
  appId: '1:62662163450:web:a1b43bc0099cc95b6b4243',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }
