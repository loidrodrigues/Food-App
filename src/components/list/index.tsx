import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Items from "./Items";

export interface RestaurantesProps {
  id: string;
  name: string;
  image: string;
}
export default function List() {
  const [data, setData] = useState<RestaurantesProps[]>();

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.3.36:3000/restaurants");
      const data = await response.json();
      setData(data);
    }
    getRestaurants();
  });
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      horizontal={false}
      contentContainerStyle={{ gap: 16 }}
      renderItem={({ item }) => <Items item={item} />}
    />
  );
}
