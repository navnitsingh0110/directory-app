import { useState } from "react";
import "./App.css";
import AddPerson from "./Components/AddPerson/AddPerson";
import RetrieveData from "./Components/RetreiveData/RetreiveData";

function App() {
  const [active, setActive] = useState("add");
  return (
    <div className="app-container">
      <h1>DIRECTORY 📒</h1>
      <div className="app-body">
        <button onClick={() => setActive("add")}>Add Person</button>
        <button onClick={() => setActive("retrieve")}>Retrieve Data</button>
      </div>
      {active === "add" ? <AddPerson /> : <RetrieveData />}
    </div>
  );
}

export default App;