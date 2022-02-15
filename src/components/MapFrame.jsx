import React, { useRef, useEffect, useContext } from "react";
import { initialize } from "../js/webmap";
import AppContext from "../store/AppContext";

const MapFrame = () => {
  const mapRef = useRef(null);
  const layerContext = useContext(AppContext);
  const layerListRef = useRef(layerContext.layerList);

  useEffect(() => {
    if (mapRef.current) {
      initialize(mapRef.current);
    }
  }, []);

  return (
    <div className="mapFrame">
      <div ref={mapRef} className="viewDiv" />
    </div>
  );
};

export default MapFrame;
