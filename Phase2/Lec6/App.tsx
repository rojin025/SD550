import { View } from "react-native";
import AppDrawer from "./NavigatorsPractice/DrawerNavigator";
import StackNavigation from "./NavigatorsPractice/stackNavigator";

export default function App() {
  return (
    <View>
      {/* <StackNavigation /> */}
      <AppDrawer />
    </View>
  );
}
