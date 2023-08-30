import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useData } from "./useData";
import { Marks } from "./Marks";
import classes from "./Map.module.css";

export const Map = () => {
  const data = useData();
  const width = 960;
  const height = 500;

  if (!data) {
    return <pre className={classes.loading}>Loading</pre>;
  }
  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  );
};
