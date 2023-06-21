import React from "react";

function ReviewForm() {
  return (
    <div className="ReviewForm">
      <form>
        <input
          type="number"
          min="1"
          max="5"
          name="rating"
          placeholder="Rating"
        ></input>
        <input type="text" name="comment" placeholder="Comment"></input>
      </form>
    </div>
  );
}

export default ReviewForm;
