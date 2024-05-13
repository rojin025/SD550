import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

interface props {
  navigation: any;
  route: any;
}

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleNavToProduct = () => {
    navigation.navigate("Products");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Product" onPress={handleNavToProduct} />
    </View>
  );
}
