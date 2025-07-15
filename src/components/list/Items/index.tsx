import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { RestaurantesProps } from "..";
export default function Items({ item }: { item: RestaurantesProps }) {
  return (
    <Pressable className="flex flex-row gap-4 items-center mt-6">
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />

      <View className="flex flex-col gap-1">
        <Text>{item.name}</Text>
        <View className="flex flex-row gap-2">
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text>4.5</Text>
        </View>
      </View>
    </Pressable>
  );
}
