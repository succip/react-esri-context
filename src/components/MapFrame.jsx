import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const MapFrame = () => {
  const mapRef = useRef(null);

  useEffect(() => {
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

    mapView.on("layerview-create", ({ layerView }) => console.log(layerView.layer.title));

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
