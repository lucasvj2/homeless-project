import React from "react";
import classes from "./Card.module.css";
import googleMaps from "../images/googleMaps.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Card(props) {


  return (
    <div className={classes.card}>
      <div className={classes.horizontalDiv}>
        <a className={classes.img} href={`https://www.google.com/maps/place/${props.Number}+${props.Street},+${props.City},+${props.State}+${props.Zip}/`} target="_blank">
          <img src={googleMaps} className={classes.img}/>
          <ExternalLinkIcon className={classes.icon} boxSize="1.7em" color="black"/>
        </a>
        <div className={classes.text}>
          <h1 className={classes.title}>{props.name}</h1>
          <h2>
            <h2 className={classes.address}>
              {props.Number} {props.Street}, {props.City} {props.State}
            </h2>
          </h2>
          <h2>
            <a className={classes.link} href={props.url} target="_blank">
              {props.url}
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
