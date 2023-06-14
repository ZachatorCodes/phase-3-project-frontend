import React, { useState, useEffect } from "react";

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
}

export default App;
