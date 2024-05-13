import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../components/HomeScreen";
import AboutScreen from "../components/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createDrawerNavigator();

function AppDrawer() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />

        <Screen name="About" component={AboutScreen} />
        {/* <Screen name="Settings" component={Settings} /> */}
      </Navigator>
    </NavigationContainer>
  );
}

export default AppDrawer;
