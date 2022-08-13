import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { axiosClient } from "../../apis/RestaurantFinder";
import Header from "../../components/Header";
import { RestaurantsContext } from "../../context/restaurantsContext";

const RestaurentDetail = () => {
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  const {
    query: { id },
  } = useRouter();
  useEffect(() => {
    if (id !== undefined) {
      axiosClient
        .get(`/restaurant/${id}`)
        .then(({ data: { data } }) => setSelectedRestaurant(data))
        .catch((e) => console.log(e));
    }
  }, [id]);

  
  return (
    <div>
      <Header title={selectedRestaurant?.name} />
    </div>
  );
};

export default RestaurentDetail;
