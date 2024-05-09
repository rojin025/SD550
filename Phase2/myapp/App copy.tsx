import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from "react-native";

export default function App() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    Alert.alert(value);
  };

  const handleChange = (text: string) => {
    console.log(text);
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Image */}
        <Image
          source={require("./assets/splash.png")}
          style={{ height: 100, width: 100 }}
        />
        <Image
          source={{ uri: "https://imagesite.com/path/to/image" }}
          style={{ height: 100, width: 100 }}
        />

        {/* Input */}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleChange}
        >
          Input
        </TextInput>
        <Text> Output: {value}</Text>
      </KeyboardAvoidingView>

      <Button title="Submit" onPress={handleSubmit} />
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
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 200,
    fontSize: 20,
  },

  text: {},
});
