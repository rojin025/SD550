import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MED_TIME = 10;
const REST_TIME = 2;

export default function App() {
  const [count, setCount] = useState(false);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{count}</Text> */}
      {/* {started ? <Button title="Stop"/>} */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
