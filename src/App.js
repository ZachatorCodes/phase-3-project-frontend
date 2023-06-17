import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Trails from "./components/Trails";
import TrailForm from "./components/TrailForm";
import { Route, Switch } from "react-router-dom";

function App() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/trails")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTrails(data);
      });
  }, []);

  function handleAddTrail(newTrail) {
    setTrails([...trails, newTrail]);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
          <TrailForm onAddTrail={handleAddTrail} />
          <Trails trails={trails} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
