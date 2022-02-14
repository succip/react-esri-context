import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { countyService, statesService } from "../services/mapServices";

const map = new Map({
  basemap: "streets-vector",
});

const mapView = new MapView({
  map,
  zoom: 5,
  center: [-97, 39],
});

const MapFrame = ({ layerList, setLayerList }) => {
  const layerListRef = useRef(layerList);
  const mapRef = useRef(null);

  map.layers.on("change", (event) => {
    if (event.added[0].name) {
      const updatedLayerList = [...layerListRef.current, event.added[0].name];
      setLayerList(updatedLayerList);
      console.log("added layer: " + event.added[0].name);
    } else {
      console.log("No name found for: " + event.added[0]);
    }
  });

  map.add(statesService);

  useEffect(() => {
    if (mapRef.current) {
      mapView.container = mapRef.current;
    }
  }, []);

  return (
    <div className="mapFrame">
      <div ref={mapRef} className="viewDiv" />
    </div>
  );
};

export default MapFrame;
