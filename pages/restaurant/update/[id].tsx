import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../apis/RestaurantFinder";
import Header from "../../../components/Header";

const UpdateRestaurant = () => {
  const {
    query: { id },
  } = useRouter();

  const router=useRouter()

  const [restaurant, setRestaurant] = useState({
    name: "",
    location: "",
    price_range: "1",
  });

  const { name, location, price_range } = restaurant;

  useEffect(() => {
    if (id !== undefined) {
      axiosClient
        .get(`/restaurant/${id}`)
        .then(({ data: { data } }) => setRestaurant({ ...data }))
        .catch((e) => console.log(e));
    }
  }, [id]);

  const changeHandler = (e: any) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const updateRestaurant = async (e:any) => {
    e.preventDefault()
    try {
      await axiosClient.put(`/restaurant/${id}`, restaurant);
      router.push("/")
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Header title="Update Restaurant" />
      <form onSubmit={updateRestaurant}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            name="name"
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            name="location"
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Name</label>
          <select
            id="name"
            value={price_range}
            name="price_range"
            onChange={changeHandler}
            className="form-select my-1 mr-sm-2"
          >
            <option disabled>Price Range</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
