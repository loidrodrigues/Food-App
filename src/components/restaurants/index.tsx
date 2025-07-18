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
      const response = await fetch("http://192.168.3.36:3000/restaurants");
      const data = await response.json();
      setRestaurant(data);
    }
    getRestaurants();
  });

  return (
    <FlatList
      data={restaurant}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 18 }}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
    />
  );
}
