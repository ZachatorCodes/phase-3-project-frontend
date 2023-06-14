import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Trails from "./components/Trails";

function App() {
  const [trails, setTrails] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/trails")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTrails(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Trails trails={trails}/>
    </div>
  );
}

export default App;
