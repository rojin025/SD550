import { createContext } from "react";
import { PublisherI } from "./Types/Types";

interface ContextType {
  setLoggedIn: (value: boolean) => void;
  publishers: PublisherI[];
  setPublishers: (publishers: PublisherI[]) => void;
}

const initialContext = {
  setLoggedIn: () => {},
  publishers: [],
  setPublishers: () => {},
};

const GlobalContext = createContext<ContextType>(initialContext);

export default GlobalContext;
