import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { HStack, chakra, Hide, Box } from "@chakra-ui/react";
import Drawer from "./Drawer";
import icon from "../images/icon.png"

export default function Header(props) {
  return (
    <chakra.header id="header">
      <nav className={classes.nav}>
        <NavLink to="/" className={classes.title}>
          <img className={classes.icon} src={icon}></img>
        </NavLink>
        <HStack as="nav">
          <Hide breakpoint="(max-width: 768px)">
            <Box className={classes.links}>
              <NavLink to="/" className={classes.link}>
                <Box className={classes.link_holder}>Home</Box>
              </NavLink>
              <NavLink to="/resources" className={classes.link}>
                <Box className={classes.link_holder}>Local Resources</Box>
              </NavLink>
              <NavLink to="/shelters" className={classes.link}>
                <Box className={classes.link_holder}>Nearest Shelters</Box>
              </NavLink>
              <NavLink to="/donate" className={classes.link}>
                <Box className={classes.link_holder}>Priority Shelters</Box>
              </NavLink>              
              <NavLink to="/about" className={classes.link}>
                <Box className={classes.link_holder}>About</Box>
              </NavLink>
              
            </Box>
          </Hide>
        </HStack>
        <Drawer />
      </nav>
    </chakra.header>
  );
}
