import { Image, Pressable, View } from "react-native";
import PagerView from "react-native-pager-view";
export default function Banner() {
  return (
    <View className="w-full h-36 md:h-60 rounded-2xl my-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="w-full h-35 rounded-2xl md:h-60"
          key="1"
          onPress={() => console.log("image pressed")}
        >
          <Image
            source={require("../../../assets/banner1.jpg")}
            className="w-full object-contain h-full rounded-2xl md:h-60"
          />
        </Pressable>

        <Pressable
          className="w-full h-35 rounded-2xl md:h-60"
          key="2"
          onPress={() => console.log("image pressed")}
        >
          <Image
            source={require("../../../assets/banner2.jpg")}
            className="w-full object-contain h-full rounded-2xl md:h-60"
          />
        </Pressable>
      </PagerView>
    </View>
  );
}
