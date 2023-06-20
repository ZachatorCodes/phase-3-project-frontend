import React from "react";

function BuildReview({ reviewID, comment, rating }) {
  return (
    <div className="Review">
      <h1>{`Rating: ${rating}/5`}</h1>
      <h2>Trail Comment:</h2>
      <h3>{comment}</h3>
    </div>
  );
}

export default BuildReview;
