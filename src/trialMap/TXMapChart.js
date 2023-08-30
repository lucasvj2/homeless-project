import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "./T.json";

const TXMapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv("/homelesspop-final.csv").then((counties) => {
      setData(counties);
    });
  }, []);

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.total_homeless))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618",
    ]);

  return (
    <ComposableMap
      projection="geoAlbers"
      data-tip=""
      width={800}
      height={900}
      style={{ width: "100%", height:"100%"}}
      onMouseDown={(e) => e.preventDefault()}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const cur = data.find((s) => s.coc === geo.properties.COCNAME);
            return (
              <Geography
                onMouseEnter={() => {
                  setTooltipContent(`${geo.properties.pop} homeless`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#0078AA" },
                  pressed: { outline: "none" },
                }}
                key={geo.rsmKey}
                geography={geo}
                fill={cur ? colorScale(cur.total_homeless) : "#EEE"}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default TXMapChart;
