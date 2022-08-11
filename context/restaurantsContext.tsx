import React, { createContext, useState } from "react";

interface IRestaurantContext {
  restaurants: IRestaurant[];
  setRestaurants: React.Dispatch<IRestaurant[]>
}

export const RestaurantsContext = createContext<IRestaurantContext>({
  restaurants: [],
  setRestaurants: ()=>null
});

type props = {
  children: React.ReactNode;
};

export const RestaurantContextProvider = ({ children }: props) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
