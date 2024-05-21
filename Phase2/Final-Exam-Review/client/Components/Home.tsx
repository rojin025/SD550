import { createStackNavigator } from "@react-navigation/stack";

import { View, Text } from "react-native";
import PublishersScreen from "./PublishersScreen";

export default function Home() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen name="home-sceen" component={PublishersScreen} />
    </Navigator>
  );
}
