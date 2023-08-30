import React from "react";
import { ChakraProvider, Text, Link } from "@chakra-ui/react";
import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const start = new Date().getTime();
  return (
    <ChakraProvider>
      <div className={classes.footer}>
        <div className={classes.text}>
          <div className={classes.column}>
            <Text fontSize=".8em" fontWeight="400" m="20px 0 13px 0">Tools</Text>

              <NavLink to="./donate" className={classes.link}>
                Find Priority Shelters
              </NavLink>
              <NavLink to="./shelters" className={classes.link}>
                Find Nearest Shelters
              </NavLink>

          </div>
          <div className={classes.column}>
            <Text fontSize=".8em" fontWeight="400" m="20px 0 10px 0">
              General Resources
            </Text>
            <div>
              <NavLink to="./Resources" className={classes.link}>
                Resources
              </NavLink>
            </div>
          </div>
          <div className={classes.column}>
            <Text fontSize=".8em" fontWeight="400" m="20px 0 10px 0">About Vrtx</Text>
            <div>
                <NavLink to="./about" className={classes.link}>
                    Our Vision
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Footer;
