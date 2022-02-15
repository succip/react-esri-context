import { createContext, useState } from "react";

const AppContext = createContext({
  layerList: [],
  setLayerList: () => {},
});

export const AppContextProvider = (props) => {
  const [layerList, setLayerList] = useState([]);

  return <AppContext.Provider value={{ layerList, setLayerList }}>{props.children}</AppContext.Provider>;
};

export default AppContext;
