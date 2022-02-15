import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { statesService } from "../data/services";

export const webmap = new ArcGISMap({
  basemap: "streets-vector",
});

const mapViewParams = {
  map: webmap,
  zoom: 5,
  center: [-97, 39],
};

webmap.layers.on("change", ({ added }) => {});

webmap.add(statesService);

export let view = new MapView(mapViewParams);

export const initialize = (container) => {
  view.container = container;
  return view;
};
