import React from "react";

function BuildTrail({ trailID, trailName, length, elevation, location, difficulty }) {
  return (
    <div className="Trail" id={trailID}>
      <h3>Trail Name: {trailName}</h3>
      <p>Length: {length} miles</p>
      <p>Elevation Gain: {elevation} feet</p>
      <p>Location: {location}</p>
      <p>Difficulty: {difficulty}</p>
    </div>
  );
}

export default BuildTrail;
