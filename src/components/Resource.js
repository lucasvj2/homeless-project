import React from "react";
import classes from "./Resource.module.css";

export default function Resource(props) {
  return (
    <a className={classes.card} href={props.link} target="_blank">
      <div className={classes.layout}>
        <div>
        <img src={props.img} className={classes.image}/>
          <h1 className={classes.title}>{props.title}</h1>
          <p className={classes.text}>{props.desc}</p>
        </div>
      </div>
    </a>
  );
}
