import React from "react";
import classes from "./Contact.module.css";
import Lucas from "../images/Lucas.png";

export default function Contact() {
  return (
      <div className="page">
        <section className={classes.section}>
            <div className={classes.start}>
              <div className={classes.info}>
                <div className={classes.image_desc}>
                  <img src={Lucas} className={classes.lucas} />
                  <h1 className={classes.lucastitle}>Lucas Johansson</h1>
                </div>
                <section className={classes.line} />
                <div>
                  <p>Senior at Monte Vista High School.</p>
                </div>
              </div>
            </div>
        </section>
        <section className={classes.scroll}></section>
      </div>
  );
}
