import React, { useState } from "react";

function TrailForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div className="TrailForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Trail Name"
          name="trail_name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Length"
          name="length"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Elevation Gain"
          name="elevation"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={handleChange}
        ></input>
        <select name="difficulty" onChange={handleChange}>
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
