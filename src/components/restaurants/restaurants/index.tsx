import { Image, Pressable, Text, View } from "react-native";
import { RestaurantesProps } from "..";
export default function RestaurantItem({
  restaurant,
}: {
  restaurant: RestaurantesProps;
}) {
  return (
    <Pressable
      onPress={() => console.log("pressed")}
      className="mt-6 flex flex-col items-center justify-center gap-4"
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <View>
        <Text>{restaurant.name}</Text>
      </View>
    </Pressable>
  );
}
