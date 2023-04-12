import "./App.css";
import { useState } from "react";
import Students from './components/Students'
import { data } from "./data/studentData";

function App() {
  // const [studentData, setStudentData] = useState({})
    // console.log(data[0].name);
  return (
    <div className="App">
    <Students data = {data} />
    </div>
  );
}

export default App;
