import { createStackNavigator } from "@react-navigation/stack";

import PublishersScreen from "./PublishersScreen";

export default function Home() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        name="home-sceen"
        component={PublishersScreen}
        options={{
          title: "Title Here",
          headerShown: true,
        }}
      />
    </Navigator>
  );
}
