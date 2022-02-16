import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { useContext } from "react";
import { AppContext } from "../store/AppContext";

export const webmap = new ArcGISMap({
  basemap: "streets-vector",
});

const mapViewParams = {
  map: webmap,
  zoom: 6,
  center: [-120.72, 46.85],
};

export let view = new MapView(mapViewParams);

export const initialize = (container) => {
  view.container = container;
  return view;
};
