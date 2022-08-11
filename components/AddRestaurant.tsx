import React, { useContext, useState } from "react";
import { axiosClient } from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/restaurantsContext";

const AddRestaurant = () => {
    const {restaurants,addRestaurant} =useContext(RestaurantsContext)
  const [restaurant, setRestaurant] = useState({
    name: "",
    location: "",
    price_range: "1",
  });

  const { name, location, price_range } = restaurant;

  const changeHandler = (e: any) => {
    setRestaurant((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewRestaurant = async (e:React.FormEvent) => {
    e.preventDefault()
    try {
      const {data: {data}} = await axiosClient.post("/restaurant", restaurant);
      addRestaurant(data)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={addNewRestaurant}>
        <div className="addContainer">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              name="name"
              onChange={changeHandler}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={location}
              name="location"
              onChange={changeHandler}
            />
          </div>
          <div className="col">
            <select
              className="form-select my-1 mr-sm-2"
              value={price_range}
              name="price_range"
              onChange={changeHandler}
            >
              <option disabled>Price Range</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
