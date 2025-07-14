import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import FoodItem from "./food";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}
export default function TrandFood() {
  const [data, setData] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFood() {
      const response = await fetch("http://200.135.76.98:3000/foods");
      const data = await response.json();
      setData(data);
    }
    getFood();
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <FoodItem food={item} />}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{ gap: 16 }}
    />
  );
}
