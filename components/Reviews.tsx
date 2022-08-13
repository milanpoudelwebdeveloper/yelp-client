import React from "react";
import Ratings from "./Ratings";

type props = {
  reviews: any[];
};

const Reviews = ({ reviews }: props) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map(({ id, name, rating, review }) => (
        <div
          key={id}
          className="card text-white bg-primary mb-3"
          style={{ maxWidth: "30%", marginRight: "12px" }}
        >
          <div className="card-header d-flex justify-content-between">
            <span>{name}</span>
            <span>
              <Ratings rating={rating} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">{review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
