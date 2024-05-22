import React, { useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Styles from "./Styles";

import { LOCAL_STORAGE_KEY } from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import showConfirmation from "../Confirmation";

export default function AboutUs() {
  // const { setLoggedIn } = useContext(GlobalContext);

  const askConfirmation = () => {
    showConfirmation(
      "Logging out...",
      "Are you sure?",
      () => handleLogOut(),
      () => {
        console.log("cancelled");
      }
    );
    const handleLogOut = async () => {
      try {
        await AsyncStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({ loggedIn: false })
        );
        // setLoggedIn(false);
        console.log("Logged in status removed successfully.");
      } catch (error) {
        console.error("Error removing logged in status:", error);
      }
    };
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        justifyContent: "flex-end",
        paddingStart: 50,
        flexDirection: "column",
      }}
    >
      <Text style={styles.header}>About Page</Text>

      <AntDesign name="user" size={100} style={styles.icon} color="#0066CC" />
      <Text style={styles.text}>Who are we?</Text>
      <Text style={styles.text}>
        We come from many places, cultures, and backgrounds, but share a strong
        common commitment to personal inner growth, wellness, better, more
        peaceful place.
      </Text>
      <TouchableHighlight
        style={[Styles.button, { backgroundColor: "red" }]}
        onPress={askConfirmation}
      >
        <Text style={[Styles.buttonTextPrimary]}>Log Out</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },
  icon: {
    marginVertical: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 14,
    color: "#444",
    marginTop: 20,
  },
});
