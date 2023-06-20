import React from "react";
import { useParams } from "react-router-dom";
import BuildReview from "./BuildReview";

function Reviews({ trails }) {
  const { id } = useParams();
  const specificTrail = trails.find((trail) => trail.id === parseInt(id));
  return (
    <div className="Reviews">
      {specificTrail.reviews.map((review) => {
        console.log(review)
        return <BuildReview key={review.id}/>;
      })}
    </div>
  );
}

export default Reviews;
