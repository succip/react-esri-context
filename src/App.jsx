import LayerList from "./components/LayerList";
import MapFrame from "./components/MapFrame";
import "./App.css";

function App() {
  return (
    <div className="row g-0">
      <div className="col-3">
        <LayerList />
      </div>
      <div className="col-9">
        <MapFrame />
      </div>
    </div>
  );
}

export default App;
