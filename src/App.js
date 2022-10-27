import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onChildAdded, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseConfig";
import OutageTable from "./OutageTable";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function App() {
  const [outages, setOutages] = useState([]);
  // Get a list of outages from your database
  function loadOutages() {
    const outageRef = ref(database, "outages");
    onChildAdded(outageRef, (data) => {
      setOutages((prev) => {
        return [...prev, data.val()];
      });
    });
    onValue(outageRef, (snapshot) => {
      const list = [];
      snapshot.forEach((child) => {
        list.push(child.val());
      });
      setOutages(list);
    });
  }

  useEffect(() => {
    loadOutages();
  }, []);

  return (
    <div className="App">
      <OutageTable data={outages} />
    </div>
  );
}

export default App;
