import { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import GlobalContext from "../Context";

export default function PublishersScreen() {
  const { publishers, setPublishers } = useContext(GlobalContext);

  return (
    <View>
      <Text>PublishersScreen</Text>
      <FlatList
        data={publishers}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
          </View>
        )}
      />
    </View>
  );
}
