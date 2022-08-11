import React, { useContext, useEffect } from "react";
import { tableHeadings } from "../constants/tableHeadings";
import { axiosClient } from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/restaurantsContext";

const Restaurants = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    axiosClient
      .get("/restaurants")
      .then(
        ({
          data: {
            data: { restaurants },
          },
        }) => setRestaurants(restaurants)
      )
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="list-group">
      <table className="table table-dark table-hover">
        <thead>
          <tr className="table-primary">
            {tableHeadings.map((item) => (
              <th scope="col" key={item}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {restaurants.map(({ id, name, location, price_range }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{location}</td>
              <td>{price_range}</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Restaurants;
