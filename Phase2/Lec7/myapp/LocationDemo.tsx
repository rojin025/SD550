import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

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
      style={{ width: "100%", height: "100%" }}
      initialRegion={{
        latitude: coords.latitude,
        longitude: coords.longitude,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
    >
      <Marker draggable coordinate={coords} pinColor="red" />
      <Text>Location Demo</Text>
    </MapView>
  );
}
