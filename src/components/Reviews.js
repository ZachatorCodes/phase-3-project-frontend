import React from "react";
import { useParams } from "react-router-dom";

function Reviews() {

  const {id} = useParams();
  console.log(id);
  return (
    <div className="Reviews">
      <h1>{id}</h1>
    </div>
  );
}

export default Reviews;
