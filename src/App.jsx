import LayerList from "./components/LayerList";
import MapFrame from "./components/MapFrame";
import "./app.css";

function App() {
  return (
    <div className="row g-0">
      <div className="col-2">
        <LayerList />
      </div>
      <div className="col-10">
        <MapFrame />
      </div>
    </div>
  );
}

export default App;
