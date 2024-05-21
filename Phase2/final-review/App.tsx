import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import GlobalContext from "./Context";
import { PublisherI } from "./Types/Types";
import AboutScreen from "./Components/AboutScreen";
import PublishersScreen from "./Components/PublishersScreen";

export default function App() {
  const [publishers, setPublishers] = useState<PublisherI[]>([]);

  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <GlobalContext.Provider
      value={{
        publishers,
        setPublishers,
      }}
    >
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen
            name="publishers-screen"
            component={PublishersScreen}
            options={{
              title: "Books",
            }}
          />
          <Screen name="about-screen" component={AboutScreen} />
        </Navigator>
      </NavigationContainer>
      ;
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: 900,
    textDecorationLine: "underline",
  },
});
