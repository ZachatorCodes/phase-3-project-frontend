import React from "react";
import BuildTrail from "./BuildTrail";

function Trails({ trails, onDeleteTrail }) {
  return (
    <div className="Trails">
      {trails.map((trail) => {
        return (
          <BuildTrail
            key={trail.id}
            trailID={trail.id}
            trailName={trail.trail_name}
            length={trail.length}
            elevation={trail.elevation}
            location={trail.location}
            difficulty={trail.difficulty}
            onDeleteTrail={onDeleteTrail}
          />
        );
      })}
    </div>
  );
}

export default Trails;
