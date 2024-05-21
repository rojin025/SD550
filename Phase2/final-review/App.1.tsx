import { View } from "react-native";
import GlobalContext from "./Context";
import { styles } from "./App";

export default function App() {
  return (
    <GlobalContext.Provider
      value={{
        publishers,
        setPublishers,
      }}
    >
      <View style={styles.container}></View>;
    </GlobalContext.Provider>
  );
}
