import React from "react";
import { useParams } from "react-router-dom";
import BuildReview from "./BuildReview";
import ReviewForm from "./ReviewForm";
import { useHistory } from "react-router-dom";

function Reviews({ trails, onAddReview }) {
  const { id } = useParams();
  const history = useHistory();

  const specificTrail = trails.find((trail) => trail.id === parseInt(id));

  function handleClick() {
    history.push("/");
  }

  return (
    <>
      <h1 className="Header">Reviews for {specificTrail.trail_name}</h1>
      <div className="ButtonDiv">
        <button id="GoHomeButton" onClick={handleClick}>
          Go Back Home
        </button>
      </div>
      <h3 className="CenterText">Add a new review</h3>
      <ReviewForm trailID={specificTrail.id} onAddReview={onAddReview} />
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
