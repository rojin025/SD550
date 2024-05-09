import { useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

import styles from "./styles";

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
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Image source={{ uri: `${image}` }} style={{ height: 100, width: 200 }} />
    </View>
  );
}

export default function App() {
  const [products, setProducts] = useState<ProductI[]>([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: i + 1,
        name: "name: " + i,
        image:
          "https://fastly.picsum.photos/id/887/200/300.jpg?hmac=jzro4NZWOPJxqU5bUBoxrD7f4jPtFNB4VmKpn7H5sYI",
      });
    }
    setProducts(arr);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={products}
          renderItem={({ item }) => <Product product={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
}
