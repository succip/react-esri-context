import React, { useRef, useEffect, useContext } from "react";
import { initialize } from "../js/webmap";
import { AppContext } from "../store/AppContext";
const testLayer = {
  type: "ADD_LAYER",
  payload: {
    layerList: ["test layer1"],
  },
};

const MapFrame = () => {
  const mapRef = useRef(null);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (mapRef.current) {
      const mapView = initialize(mapRef.current);

      mapView.on("click", () => {
        dispatch(testLayer);
      });
    }
  }, []);

  return (
    <div className="mapFrame">
      <div ref={mapRef} className="viewDiv" />
    </div>
  );
};

export default MapFrame;
