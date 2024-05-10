import { View, Text, Button } from "react-native";

interface props {
  navigation: any;
  route: any;
}

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {/* <Button    /> */}
    </View>
  );
}
