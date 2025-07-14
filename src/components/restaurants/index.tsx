import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import RestaurantItem from "./restaurants";

export interface RestaurantesProps {
  id: string;
  name: string;
  image: string;
}
export default function Restaurants() {
  const [restaurant, setRestaurant] = useState<RestaurantesProps[]>([]);
  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://200.135.76.98:3000/restaurants");
      const data = await response.json();
      setRestaurant(data);
    }
    getRestaurants();
  });

  return (
    <FlatList
      data={restaurant}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 18 }}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
    />
  );
}
