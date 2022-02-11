import { useState } from "react";
import LayerList from "./components/LayerList";
import MapFrame from "./components/MapFrame";
import "./app.css";
import LayerContext from "./store/layer-context";

function App() {
  const [layerList, setLayerList] = useState(["DefaultLayer1", "Default Layer 2"]);

  return (
    <div className="row g-0">
      <div className="col-2">
        <LayerList />
      </div>
      <div className="col-10">
        <MapFrame layerList={layerList} setLayerList={setLayerList} />
      </div>
    </div>
  );
}

export default App;
