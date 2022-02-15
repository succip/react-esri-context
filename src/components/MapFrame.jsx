import React, { useRef, useEffect } from "react";
import { initialize } from "../js/webmap";

const MapFrame = ({ layerList, setLayerList }) => {
  const mapRef = useRef(null);
  console.log("component rendered");

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
