import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
export default function Header() {
  return (
    <View className="flex justify-between flex-row w-full bg-purple-50 items-center p-4 rounded-full">
      <Pressable className="p-3 bg-white rounded-full">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>
      <View className="flex flex-col items-center gap-2">
        <Text className="font-late">Localização</Text>
        <View className="flex  flex-row justify-center items-center gap-2">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="font-bold">São Paulo</Text>
        </View>
      </View>
      <Pressable className="p-3 bg-white rounded-full">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}
