import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
export default function Search() {
  return (
    <View className="flex flex-row items-center gap-2 bg-white p-3 rounded-xl">
      <Feather name="search" size={20} color="#121212" />

      <TextInput
        placeholder="Procure sua comida..."
        className="h-full w-full flex-1"
      />
    </View>
  );
}
