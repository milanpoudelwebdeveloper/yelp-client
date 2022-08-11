import React, { createContext, useState } from "react";

interface IRestaurantContext {
  restaurants: IRestaurant[];
  addRestaurant: (restaurant: IRestaurant) => void;
  setRestaurants: React.Dispatch<IRestaurant[]>
}

export const RestaurantsContext = createContext<IRestaurantContext>({
  restaurants: [],
  addRestaurant: () => null,
  setRestaurants: () => null,
});

type props = {
  children: React.ReactNode;
};

export const RestaurantContextProvider = ({ children }: props) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const addRestaurant = (restaurant: IRestaurant) => {
    setRestaurants((prevState) => [restaurant, ...prevState]);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        addRestaurant,
        setRestaurants,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
