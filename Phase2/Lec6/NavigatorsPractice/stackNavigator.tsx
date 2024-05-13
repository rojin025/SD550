import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../components/Home";
import Products from "../components/Products";

export default function StackNavigation() {
  const { Navigator, Screen } = createNativeStackNavigator();
  // const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="home"
          component={Home}
          options={{ title: "My Home", headerShown: true }}
        />
        <Screen name="products" component={Products} />
      </Navigator>
    </NavigationContainer>
  );
}
