import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "yourKey",
  authDomain: "yourDomain",
  databaseURL: "yourDataBaseUrl",
  projectId: "yourProjectId",
  storageBucket: "yourStorageBucket",
  messagingSenderId: "yourMessagingSenderId"
}

firebase.initializeApp(config)

export default firebase