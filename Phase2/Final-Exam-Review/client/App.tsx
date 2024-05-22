import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";

import GlobalContext from "./Context";
import { PublisherI } from "./Types/Types";
import { useEffect, useState } from "react";
import { getPublishers } from "./services/publisher.api";
import Login from "./Components/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEY } from "./Components/constants";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [publishers, setPublishers] = useState<PublisherI[]>([]);
  const { Navigator, Screen } = createBottomTabNavigator();

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      const isLoggedIn = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
      if (isLoggedIn) {
        const user = JSON.parse(isLoggedIn);
        setLoggedIn(user.loggedIn);
      }
    };
    checkIsLoggedIn();

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

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <GlobalContext.Provider
      value={{
        setLoggedIn,
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
