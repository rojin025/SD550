import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import A from "./Components/Home";
import AboutUs from "./Components/AboutUs";

export default function App() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={"Home"} component={A} />
        <Screen name={"About-Us"} component={AboutUs} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
