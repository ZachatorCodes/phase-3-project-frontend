import React, { useState } from "react";

function ReviewForm({ trailID, onAddReview }) {
  console.log(`Trail ID: ${trailID}`);

  const [reviewInfo, setReviewInfo] = useState({
    rating: 1,
    comment: "",
  });

  function handleChange(e) {
    console.log(`NAME: ${e.target.name} | VALUE: ${e.target.value}`);

    const name = e.target.name;
    const value = e.target.value;

    setReviewInfo({
      ...reviewInfo,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Review Submitted");
    console.log(reviewInfo);
    fetch(`http://localhost:9292/trails/${trailID}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((r) => r.json())
      .then((review) => onAddReview(review));
    setReviewInfo({
      rating: 1,
      comment: "",
    });
  }

  return (
    <div className="ReviewForm">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="5"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
          value={reviewInfo.rating}
        ></input>
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          onChange={handleChange}
          value={reviewInfo.comment}
        ></input>
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
