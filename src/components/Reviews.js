import React from "react";
import { useParams } from "react-router-dom";
import BuildReview from "./BuildReview";
import ReviewForm from "./ReviewForm";

function Reviews({ trails, onAddReview }) {
  const { id } = useParams();
  const specificTrail = trails.find((trail) => trail.id === parseInt(id));
  return (
    <>
      <h1 className="Header">Reviews for {specificTrail.trail_name}</h1>
      <h3 className="CenterText">Add a new review</h3>
      <ReviewForm trailID={specificTrail.id} onAddReview={onAddReview}/>
      <div className="Reviews">
        {specificTrail.reviews.map((review) => {
          console.log(review);
          return (
            <BuildReview
              key={review.id}
              reviewID={review.id}
              rating={review.rating}
              comment={review.comment}
            />
          );
        })}
      </div>
    </>
  );
}

export default Reviews;
