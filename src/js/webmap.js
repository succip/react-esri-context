import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export const webmap = new ArcGISMap({
  basemap: "streets-vector",
});

const mapViewParams = {
  map: webmap,
  zoom: 11,
  center: [-122.85, 49.12],
};

export let view = new MapView(mapViewParams);

export const initialize = (container) => {
  view.container = container;
  return view;
};
