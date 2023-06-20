import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function UpdateTrail({ trails, onUpdateTrail }) {
  const { id } = useParams();
  const history = useHistory();
  const specificTrail = trails.find((trail) => trail.id === parseInt(id));

  const [updatedTrailInfo, setUpdatedTrailInfo] = useState({
    trail_name: specificTrail.trail_name,
    length: specificTrail.length,
    elevation: specificTrail.elevation,
    location: specificTrail.location,
    difficulty: specificTrail.difficulty,
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/trails/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTrailInfo),
    })
      .then((r) => r.json())
      .then((trail) => {
        onUpdateTrail(trail);
        history.push("/");
      });
  }

  function handleChange(e) {
    console.log(`NAME: ${e.target.name} | VALUE: ${e.target.value}`);

    const name = e.target.name;
    const value = e.target.value;

    setUpdatedTrailInfo({
      ...updatedTrailInfo,
      [name]: value,
    });
  }

  return (
    <div className="UpdateTrail">
      <h1 className="Header">
        Update Information for {specificTrail.trail_name}
      </h1>
      <div className="TrailForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Trail Name"
            name="trail_name"
            onChange={handleChange}
            value={updatedTrailInfo.trail_name}
          ></input>
          <input
            type="text"
            placeholder="Length"
            name="length"
            onChange={handleChange}
            value={updatedTrailInfo.length}
          ></input>
          <input
            type="text"
            placeholder="Elevation Gain"
            name="elevation"
            onChange={handleChange}
            value={updatedTrailInfo.elevation}
          ></input>
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={handleChange}
            value={updatedTrailInfo.location}
          ></input>
          <select
            name="difficulty"
            onChange={handleChange}
            value={updatedTrailInfo.difficulty}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <button type="submit">Update Trail</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTrail;
