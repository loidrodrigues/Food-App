import constants from "expo-constants";
import { ScrollView, View } from "react-native";
import Banner from "../components/banner";
import Header from "../components/header";
import List from "../components/list";
import Restaurants from "../components/restaurants";
import Search from "../components/search";
import Section from "../components/section";
import TrandFood from "../components/tranding";
export default function Index() {
  const statusBarheight = constants.statusBarHeight;
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200 px-4"
      showsHorizontalScrollIndicator={false}
    >
      <View className="w-full" style={{ marginTop: statusBarheight + 10 }}>
        <Header />
      </View>
      <View>
        <Banner />
        <Search />
      </View>
      <Section
        name="Comidas populares"
        label="Ver tudo"
        action={() => console.log("ver tudo")}
        size="text-2xl"
      />
      <TrandFood />
      <Section
        name="Famosos"
        label="Ver tudo"
        action={() => console.log("ver tudo")}
        size="text-2xl"
      />
      <Restaurants />

      <Section
        name="Restaurantes"
        label="Ver tudo"
        action={() => console.log("ver tudo")}
        size="text-2xl"
      />
      <List />
    </ScrollView>
  );
}
