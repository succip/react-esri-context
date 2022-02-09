import LayerList from "./components/LayerList";
import MapFrame from "./components/MapFrame";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <LayerList />
        </div>
        <div className="col-9">
          <MapFrame />
        </div>
      </div>
    </div>
  );
}

export default App;
