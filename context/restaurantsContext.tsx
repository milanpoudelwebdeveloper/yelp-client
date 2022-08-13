import React, { createContext, useState } from "react";

interface IRestaurantContext {
  restaurants: IRestaurant[]
  addRestaurant: (restaurant: IRestaurant) => void
  setRestaurants: React.Dispatch<IRestaurant[]>
  selectedRestaurant: IRestaurant
  setSelectedRestaurant: React.Dispatch<IRestaurant>
}

export const RestaurantsContext = createContext<IRestaurantContext>({
  restaurants: [],
  addRestaurant: () => null,
  setRestaurants: () => null,
  selectedRestaurant: {id:"",name:"", location:"", price_range: 1},
  setSelectedRestaurant: ()=>null
});

type props = {
  children: React.ReactNode;
};

export const RestaurantContextProvider = ({ children }: props) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant]=useState<IRestaurant>({id:"",name:"", location:"", price_range: 1})

  const addRestaurant = (restaurant: IRestaurant) => {
    setRestaurants((prevState) => [restaurant, ...prevState]);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        addRestaurant,
        setRestaurants,
        selectedRestaurant,
        setSelectedRestaurant
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
