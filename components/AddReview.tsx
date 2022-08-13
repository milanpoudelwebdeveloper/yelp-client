import { useRouter } from "next/router";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { axiosClient } from "../apis/RestaurantFinder";

type props = {
  id: string;
};

const AddReview = ({ id }: props) => {
  const [reviews, setReviews] = useState({
    name: "",
    review: "",
    rating: "1",
  });

  const { name, review, rating } = reviews;

  const changeHandler = (e: React.ChangeEvent<any>) => {
    setReviews({ ...reviews, [e.target.name]: e.target.value });
  };

  const addReview = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosClient.post(`/reviews/${id}`, reviews);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="mb-2">
      <form onSubmit={addReview}>
        <div className="row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              id="name"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="name">Rating</label>
            <select
              value={rating}
              name="rating"
              id="rating"
              onChange={changeHandler}
              className="form-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group col-8">
            <label htmlFor="review">Review</label>
            <textarea
              id="review"
              name="review"
              value={review}
              placeholder="Add your review"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
        </div>
        <button className="btn btn-primary mt-4" type="submit">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
