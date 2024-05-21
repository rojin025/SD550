import { useEffect, useState } from "react";
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";

import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

import * as ImagePicker from "expo-image-picker";

export default function LocationDemo() {
  const [status, setStatus] = useState();
  const [coords, setCoords] = useState<any>(null);

  useEffect(() => {
    async function getkPermision() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          const loc = await Location.getCurrentPositionAsync();
          setCoords(loc.coords);
        }
      } catch (e) {
        console.log("Error", e);
      }
    }
    getkPermision();
  }, []);

  if (!coords) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: coords.latitude,
        longitude: coords.longitude,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
    >
      <Marker draggable coordinate={coords} pinColor="red" />
      <View style={styles.overLayTextContainer}>
        <Text>Location Demo</Text>
      </View>
    </MapView>
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
