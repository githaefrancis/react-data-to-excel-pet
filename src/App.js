import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import { ExportToExcel } from "./components/ExportToExcel";

function App() {
  const [data, setData] = useState([]);
  const fileName = "myfile";

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setData(res.data.items);
          console.log(res.data.items);
        });
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}

export default App;
