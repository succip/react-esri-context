import React, { useRef, useEffect, useContext } from "react";
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
  });

  map.add(statesService);

  mapView.on("layerview-create", ({ layerView }) => {
    const newLayerList = [...layerList, layerView.layer.title];
    setLayerList(newLayerList);
  });

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
