import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { countyService, statesService } from "../services/mapServices";

const MapFrame = ({ layerList, setLayerList }) => {
  const mapRef = useRef(null);

  const map = new Map({
    basemap: "streets-vector",
  });

  const mapView = new MapView({
    map,
    zoom: 5,
    center: [-97, 39],
  });

  map.layers.on("change", (event) => {
    const updatedLayerList = [...layerList, event.added[0].title];
    setLayerList(updatedLayerList);
  });

  useEffect(() => {
    if (mapRef.current) {
      map.add(countyService);
      map.add(statesService);
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
