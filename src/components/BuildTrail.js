import React from "react";
import { Link } from "react-router-dom";

function BuildTrail({
  trailID,
  trailName,
  length,
  elevation,
  location,
  difficulty,
  onDeleteTrail,
}) {
  function handleDeleteClick() {
    console.log(trailID);
    fetch(`http://localhost:9292/trails/${trailID}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((trail) => onDeleteTrail(trail));
  }

  return (
    <div className="Trail" id={trailID}>
      <h3>Trail Name: {trailName}</h3>
      <p>Length: {length} miles</p>
      <p>Elevation Gain: {elevation} feet</p>
      <p>Location: {location}</p>
      <p>Difficulty: {difficulty}</p>
      <Link to={`/reviews/${trailID}`}>
        <button>See Reviews</button>
      </Link>
      <Link to={`/update/${trailID}`}>
        <button>Edit Trail</button>
      </Link>
      <button onClick={handleDeleteClick}>Delete Trail</button>
    </div>
  );
}

export default BuildTrail;
