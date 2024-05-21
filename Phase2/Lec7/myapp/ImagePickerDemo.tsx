import { useEffect, useState } from "react";
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  View,
  Button,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function LocationDemo() {
  const [status, setStatus] = useState();
  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    async function handlePick() {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.canceled) setImage(result.assets[0].uri);
      } catch (e) {
        console.log("Error", e);
      }
    }
    handlePick();
  }, []);

  return (
    <View>
      <Text>Status: {status}</Text>
      {/* <Button title="Pick a imgae" onPress={}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  overLayTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 20,
    backgroundColor: "transparent",
  },
});
