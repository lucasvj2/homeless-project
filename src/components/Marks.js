import { geoAlbersUsa, geoPath } from 'd3';
import classes from "./Marks.module.css"

const projection = geoAlbersUsa();
const path = geoPath(projection);

export const Marks = ({ data: {states, interiors} }) => (
  <g className={classes.marks}>
      {states.features.map(feature => (
          <path className={classes.state} d={path(feature)} />
      ))}
      <path className={classes.interiors} d={path(interiors)} />
  </g>
);
