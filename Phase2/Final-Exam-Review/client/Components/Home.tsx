import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';

import PublishersScreen from "./Publisher/PublishersScreen";
import UpdatePublisherScreen from "./Publisher/UpdatePublisherScreen";
import PublisherDetailsScreen from "./Publisher/PublisherDetailsScreen";
import AddPublisherScreen from "./Publisher/AddPublisherScreen";

// import PublishersScreen from "./PublishersScreen";

export default function Home() {
  const { Navigator, Screen } = createStackNavigator();
  // const Drawer = createDrawerNavigator();

  return (
    <Navigator initialRouteName="home-screen">
      <Screen
        name="home-sceen"
        component={PublishersScreen}
        options={{
          title: "",
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
      <Screen
        name="publisher-details"
        component={PublisherDetailsScreen}
        options={{ headerTitle: () => null }}
      />
      <Screen
        name="add-publisher"
        component={AddPublisherScreen}
        options={{
          // title: "",
          headerTitle: () => null,
        }}
      />
    </Navigator>
  );
}
