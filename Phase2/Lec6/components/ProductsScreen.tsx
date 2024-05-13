import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function ProductsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Products Screen</Text>
      <Button
        title="Go Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
