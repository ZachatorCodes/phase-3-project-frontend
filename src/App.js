import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Trails from "./components/Trails";
import TrailForm from "./components/TrailForm";
import { Route, Switch } from "react-router-dom";
import Reviews from "./components/Reviews";
import UpdateTrail from "./components/UpdateTrail";

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

  function handleDeleteTrail(deletedTrail) {
    const updatedTrails = trails.filter(
      (trail) => trail.id !== deletedTrail.id
    );
    setTrails(updatedTrails);
  }

  function handleUpdateTrail(updatedTrail) {
    const updatedTrails = trails.map((trail) => {
      if (updatedTrail.id === trail.id) {
        return updatedTrail;
      } else {
        return trail;
      }
    });
    setTrails(updatedTrails);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header />
          <TrailForm onAddTrail={handleAddTrail} />
          <Trails trails={trails} onDeleteTrail={handleDeleteTrail} />
        </Route>
        <Route path="/reviews/:id">
          <Reviews trails={trails} />
        </Route>
        <Route path="/update/:id">
          <UpdateTrail trails={trails} onUpdateTrail={handleUpdateTrail}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
