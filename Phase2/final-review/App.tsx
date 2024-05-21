import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>1</Text>
      </View>

      <View>
        <Text style={styles.title}>Text</Text>
      </View>
      <View>
        <Text style={styles.title}>2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: 900,
    textDecorationLine: "underline",
  },
});
