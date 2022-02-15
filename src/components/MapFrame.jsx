import React, { useRef, useEffect, useContext } from "react";
import { initialize } from "../js/webmap";
import { AppContext } from "../store/AppContext";

const MapFrame = () => {
  const mapRef = useRef(null);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (mapRef.current) {
      const mapView = initialize(mapRef.current);

      mapView.map.layers.on("change", (event) => {
        dispatch({
          type: "ADD_LAYER",
          payload: event.added[0].title,
        });
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
