import { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import GlobalContext from "../../Context";
import { updatePublisher } from "../../services/publisher.api";
import Styles from "../Styles";

function UpdatePublisherScreen({ navigation, route }: any) {
  const [publisher, setPublisher] = useState(route.params);
  const { publishers, setPublishers } = useContext(GlobalContext);
  const [isEmailVaild, setIsEmailVaild] = useState(true);

  const isValidEmail = (email: string) => {
    return email.endsWith(".com");
  };

  const handleEmailChange = (text: string) => {
    setPublisher({ ...publisher, email: text });
    setIsEmailVaild(isValidEmail(text));
  };
  const handleUpdate = async () => {
    console.log("Update:", publisher);
    try {
      const data = await updatePublisher(publisher.id, publisher);
      if (data) {
        const index = publishers.findIndex(
          (currAuth) => currAuth.id === publisher.id
        );
        if (index !== -1) {
          const updatedpublishers = [...publishers];
          updatedpublishers[index] = data;
          setPublishers([]);
          setPublishers(updatedpublishers);
          navigation.goBack();
        }
      }
    } catch (error) {
      console.error("Error updating Publisher:", error);
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.headerText}>Add Publishers</Text>
      <TextInput
        placeholder="Name:"
        style={Styles.input}
        value={publisher.name}
        onChangeText={(text) => setPublisher({ ...publisher, name: text })}
      />
      <TextInput
        placeholder="ID:"
        style={[Styles.input, { color: "lightgray" }]}
        editable={false}
        value={publisher.id}
        onChangeText={(text) => setPublisher({ ...publisher, id: text })}
      />
      <TextInput
        placeholder="Phone:"
        style={Styles.input}
        value={publisher.phone}
        onChangeText={(text) => setPublisher({ ...publisher, phone: text })}
      />
      <TextInput
        placeholder="Email:"
        style={Styles.input}
        value={publisher.email}
        onChangeText={handleEmailChange}
      />
      {!isEmailVaild && <Text>Invalid Email!</Text>}
      <Pressable style={Styles.button} onPress={handleUpdate}>
        <Text style={Styles.buttonTextPrimary}>Update</Text>
      </Pressable>
    </View>
  );
}

export default UpdatePublisherScreen;
