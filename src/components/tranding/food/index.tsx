import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { FoodProps } from "..";
export default function FoodItem({ food }: { food: FoodProps }) {
  return (
    <View className="flex flex-col mt-4 gap-2 relative">
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />
      <View className="flex flex-row items-center gap-2 absolute top-2 right-2 bg-neutral-900/90 p-1 rounded-full">
        <Ionicons name="star" size={14} color="#ca8a04" />
        <Text className="text-white">{food.rating}</Text>
      </View>
      <Text className="text-green-600">R${food.price}</Text>
      <Text className="">R${food.name}</Text>
      <Text className="text-sm text-gray-500">
        R${food.time} - R${food.delivery}
      </Text>
    </View>
  );
}
