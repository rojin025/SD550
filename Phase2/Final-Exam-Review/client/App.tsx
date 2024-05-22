import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";

import GlobalContext from "./Context";
import { PublisherI } from "./Types/Types";
import { useEffect, useState } from "react";
import { getPublishers } from "./services/publisher.api";

export default function App() {
  const [publishers, setPublishers] = useState<PublisherI[]>([]);
  const { Navigator, Screen } = createBottomTabNavigator();

  useEffect(() => {
    const loadPublishers = async () => {
      try {
        const data = await getPublishers();
        setPublishers(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadPublishers();
  });

  return (
    <GlobalContext.Provider
      value={{
        publishers,
        setPublishers,
      }}
    >
      <NavigationContainer>
        <Navigator>
          <Screen
            name={"Home"}
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Screen name={"About-Us"} component={AboutUs} />
        </Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}
