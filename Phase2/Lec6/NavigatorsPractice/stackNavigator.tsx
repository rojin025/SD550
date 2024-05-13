import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../components/HomeScreen";
import ProductsScreen from "../components/ProductsScreen";

export default function StackNavigation() {
  const { Navigator, Screen } = createNativeStackNavigator();
  // const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "My Home", headerShown: true }}
        />
        <Screen name="Products" component={ProductsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
