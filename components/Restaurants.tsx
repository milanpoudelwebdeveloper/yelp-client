import React, { useContext, useEffect } from "react";
import { tableHeadings } from "../constants/tableHeadings";
import { axiosClient } from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/restaurantsContext";
import { useRouter } from "next/router";

const Restaurants = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const router= useRouter()

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

  const deleteRestaurant = async (id: string) => {
    try {
      axiosClient.delete(`/restaurant/${id}`);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

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
              <td onClick={()=>router.push(`/restaurant/${id}`)}>{name}</td>
              <td>{location}</td>
              <td>{price_range}</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning" onClick={()=>router.push(`/restaurant/update/${id}`)}>Edit</button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRestaurant(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Restaurants;
