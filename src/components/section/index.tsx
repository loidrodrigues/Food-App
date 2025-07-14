import { Pressable, Text, View } from "react-native";

interface props {
  name: string;
  label: string;
  size:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl";
  action: () => void;
}
export default function Section({ name, label, size, action }: props) {
  return (
    <View className="flex flex-row justify-between mt-4 items-center">
      <Text className={`font-bold ${size}`}>{name}</Text>
      <Pressable onPress={action}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
