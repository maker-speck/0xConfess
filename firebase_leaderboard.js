// Firebase SDK (placeholder)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "terminal-of-truths.firebaseapp.com",
  projectId: "terminal-of-truths",
  storageBucket: "terminal-of-truths.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg12345"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function submitScore(username, confessions) {
  db.collection("leaderboard").add({
    username: username,
    confessions: confessions,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
}
