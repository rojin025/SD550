import { createStackNavigator } from "@react-navigation/stack";
import PublishersScreen from "./Publisher/PublishersScreen";
import UpdatePublisherScreen from "./Publisher/UpdatePublisherScreen";

// import PublishersScreen from "./PublishersScreen";

export default function Home() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        name="home-sceen"
        component={PublishersScreen}
        options={{
          // title: "Pub",
          headerShown: false,
        }}
      />
      <Screen
        name="update-publisher"
        component={UpdatePublisherScreen}
        options={{
          headerTitle: () => null,
        }}
      />
    </Navigator>
  );
}
