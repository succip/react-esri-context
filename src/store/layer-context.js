import React from "react";

const LayerContext = React.createContext({
  layerList: [],
  setLayerList: () => {},
});

export default LayerContext;
