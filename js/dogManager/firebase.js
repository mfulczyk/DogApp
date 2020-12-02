const firebaseConfig = {
  apiKey: "AIzaSyDYWCf94o-HcghIVJY_lq1gsCgz8bdAvpc",
  authDomain: "dog-app-cfc56.firebaseapp.com",
  databaseURL: "https://dog-app-cfc56.firebaseio.com",
  projectId: "dog-app-cfc56",
  storageBucket: "dog-app-cfc56.appspot.com",
  messagingSenderId: "210362916667",
  appId: "1:210362916667:web:bdf1ac8f6fb15090d9e11e",
  measurementId: "G-M7XLG25Q58",
};

firebase.initializeApp(firebaseConfig);
database = firebase.database();

const ref = database.ref("dogs");
ref.on("value", godData, errData)

function gotData(data) {

}

funston errData(err) {
    console.log("Error" + err)
}
