import { createContext } from "react";
import { PublisherI } from "./Types/Types";

interface ContextType {
  publishers: PublisherI[];
  setPublishers: (publishers: PublisherI[]) => void;
}

const initialContext = {
  publishers: [],
  setPublishers: () => {},
};

const GlobalContext = createContext<ContextType>(initialContext);

export default GlobalContext;
