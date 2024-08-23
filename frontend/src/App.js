import "./App.css";
import { useEffect, useState } from "react";
import { getAllProject } from "./api/project.ts";

function App() {
  const [base64imgArr, setBase64imgArr] = useState([]);

  useEffect(() => {
    getAllProject().then((projects) => {
      const updatedBase64imgArr = projects.map((project) => project.mainimg);

      setBase64imgArr((prevBase64imgArr) => [
        ...prevBase64imgArr,
        ...updatedBase64imgArr,
      ]);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={base64imgArr[4]} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
