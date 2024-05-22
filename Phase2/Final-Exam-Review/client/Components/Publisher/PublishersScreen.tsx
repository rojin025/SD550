import React, { useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import Styles from "../Styles";
import Publisher from "./Publisher";
import GlobalContext from "../../Context";

function PublishersScreen({ navigation }: any) {
  const { publishers, setPublishers } = useContext(GlobalContext);

  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.headerText}>Publishers</Text>
      </View>
      <FlatList
        data={publishers}
        renderItem={({ item, index }) => (
          <Publisher publisherData={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Pressable
        style={Styles.button}
        onPress={() => {
          navigation.navigate("add-publisher");
        }}
      >
        <Text style={Styles.buttonText}>Add Publisher</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default PublishersScreen;

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
