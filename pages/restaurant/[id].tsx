import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { axiosClient } from "../../apis/RestaurantFinder";
import AddReview from "../../components/AddReview";
import Header from "../../components/Header";
import Reviews from "../../components/Reviews";
import { RestaurantsContext } from "../../context/restaurantsContext";

const RestaurentDetail = () => {
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    if (id !== undefined) {
      axiosClient
        .get(`/reviews/${id}`)
        .then(({ data:{reviews}}) => setReviews(reviews))
        .catch((e) => console.log(e));
    }
  },[id]);

  return (
    <div>
      <Header title={selectedRestaurant?.name} />
     {reviews && <Reviews  reviews={reviews}/> } 
      <AddReview id={selectedRestaurant?.id}/>
    </div>
  );
};

export default RestaurentDetail;
