import { createContext, useReducer, useState } from "react";

export const AppContext = createContext({
  layerList: [],
  setLayerList: () => {},
});

const initialState = {
  layerList: [],
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_LAYER":
      return { ...state, payload };
    default:
      return state;
  }
}

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContext;
