import React, { useState } from "react";

function TrailForm({ onAddTrail }) {
  const [trailInfo, setTrailInfo] = useState({
    trail_name: "",
    length: "",
    elevation: "",
    location: "",
    difficulty: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(trailInfo);
    console.log("Fetching...");
    fetch("http://localhost:9292/trails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trailInfo),
    })
      .then((r) => r.json())
      .then((data) => onAddTrail(data));
    setTrailInfo({
      trail_name: "",
      length: "",
      elevation: "",
      location: "",
      difficulty: "",
    });
  }

  function handleChange(e) {
    console.log(`NAME: ${e.target.name} | VALUE: ${e.target.value}`);

    const name = e.target.name;
    const value = e.target.value;

    setTrailInfo({
      ...trailInfo,
      [name]: value,
    });
  }

  return (
    <div className="TrailForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Trail Name"
          name="trail_name"
          onChange={handleChange}
          value={trailInfo.trail_name}
        ></input>
        <input
          type="number"
          min="0"
          placeholder="Length"
          name="length"
          onChange={handleChange}
          value={trailInfo.length}
        ></input>
        <input
          type="number"
          min="0"
          placeholder="Elevation Gain"
          name="elevation"
          onChange={handleChange}
          value={trailInfo.elevation}
        ></input>
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={handleChange}
          value={trailInfo.location}
        ></input>
        <select
          name="difficulty"
          onChange={handleChange}
          value={trailInfo.difficulty}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button type="submit">Add Trail</button>
      </form>
    </div>
  );
}

export default TrailForm;
