import { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import GlobalContext from "../../Context";
import { createPublisher } from "../../services/publisher.api";
import Styles from "../Styles";

const initialPublisher = {
  id: "",
  name: "",
  phone: "",
  email: "",
};

function AddPublisherScreen({ navigation }: any) {
  const { publishers, setPublishers } = useContext(GlobalContext);
  const [publisher, setPublisher] = useState(initialPublisher);
  const [isValidEmail, setIsEmailVaild] = useState(true);

  const handleAdd = async () => {
    const index = publishers.findIndex(
      (current) =>
        current.id.trim().toLowerCase() === publisher.id.trim().toLowerCase()
    );
    if (index === -1) {
      try {
        const res = await createPublisher(publisher);
        if (res) {
          setPublishers([...publishers, res]);
          console.log("Added publisher:", res);
          navigation.goBack();
        }
      } catch (error) {}
    }
    console.log("Publisher unable to add:", publisher);
  };

  const isEmailValid = (email: string) => {
    return email.endsWith(".com");
  };

  const handleEmailChange = (text: string) => {
    setPublisher({ ...publisher, email: text });
    setIsEmailVaild(isEmailValid(text));
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Add Publishers</Text>
      <TextInput
        placeholder="Name:"
        style={Styles.input}
        value={publisher.name}
        onChangeText={(text) =>
          setPublisher((prev) => ({
            ...prev,
            name: text,
          }))
        }
      />
      <TextInput
        placeholder="ID:"
        style={Styles.input}
        value={publisher.id}
        onChangeText={(text) => setPublisher((prev) => ({ ...prev, id: text }))}
      />
      <TextInput
        placeholder="Phone:"
        style={Styles.input}
        value={publisher.phone}
        onChangeText={(text) =>
          setPublisher((prev) => ({ ...prev, phone: text }))
        }
      />
      <TextInput
        placeholder="Email:"
        style={Styles.input}
        value={publisher.email}
        onChangeText={handleEmailChange}
      />
      {isValidEmail ? (
        <Pressable style={Styles.button} onPress={handleAdd}>
          <Text style={Styles.buttonText}>Add</Text>
        </Pressable>
      ) : (
        <Text>Invalid Email</Text>
      )}
    </View>
  );
}

export default AddPublisherScreen;
