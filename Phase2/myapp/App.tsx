import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
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
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

interface ProductI {
  id: number;
  name: string;
  image: string;
}

interface props {
  product: ProductI;
}

function Product({ product }: props) {
  const { id, name, image } = product;
  return (
    <View>
      <Text>
        {id}
        {name}
      </Text>
      <Image source={{ uri: `${image}` }} style={{ height: 100, width: 200 }} />
    </View>
  );
}

export default function App() {
  const [products, setProducts] = useState<ProductI[]>([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({
        id: i + 1,
        name: "name " + i,
        image:
          "https://fastly.picsum.photos/id/887/200/300.jpg?hmac=jzro4NZWOPJxqU5bUBoxrD7f4jPtFNB4VmKpn7H5sYI",
      });
    }
    setProducts(arr);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <SafeAreaView>
        <ScrollView>
          <FlatList
            data={products}
            renderItem={({ item }) => <Product product={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      </SafeAreaView>
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
