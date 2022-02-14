import React from "react";

const LayerList = ({ layerList }) => {
  return (
    <div className="layerList">
      <h3>Map Layers</h3>
      {layerList.map((layer) => {
        return <p key={layer}>{layer}</p>;
      })}
    </div>
  );
};

export default LayerList;
