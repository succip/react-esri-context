import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

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

  const statesService = new FeatureLayer({
    url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2",
    name: "States",
  });

  map.layers.on("change", (event) => {
    const updatedLayerList = [...layerList, event.added[0].title];
    setLayerList(updatedLayerList);
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
