import { useContext } from "react";
import AppContext from "../store/AppContext";

const LayerList = () => {
  const layerContext = useContext(AppContext);
  const layerList = layerContext.layerList;
  return (
    <div className="layerList">
      <h3>Map Layers</h3>
      {layerList.map((layer) => {
        return <p key={layer}>{layer}</p>;
      })}
    </div>
  );
};

export default LayerList;
