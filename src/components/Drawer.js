import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  DrawerCloseButton,
  Show,
  ChakraProvider
} from "@chakra-ui/react";
import classes from "./Drawer.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function SizeExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <ChakraProvider>
      <Show breakpoint="(max-width: 768px)">
        <Button
          ref={btnRef}
          onClick={onOpen}
          mr="4"
          p="0"
          bg="transparent"
          color="black"
          _hover={{ background: "transparent", color: "gray.500" }}
          _active={{ background: "transparent", color: "gray.500" }}
          ml="auto"
        >
          <HamburgerIcon />
        </Button>
      </Show>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        size="sm"
        isFullHeight={true}
        preserveScrollBarGap={true}
        autoFocus={false}
      >
        <DrawerOverlay display="none"/>
          <DrawerContent bg="black">
            <DrawerCloseButton
              mr="2"
              mt="4"
              p="0"
              color="gray.500"
              _hover={{ background: "transparent", color: "white" }}
              _active={{ background: "transparent" }}
            />
            <DrawerBody>
              <section className={classes.links}>
                <NavLink to="/" onClick={onClose} className={classes.link}>
                  Home
                </NavLink>
                <hr />
                <NavLink
                  to="/shelters"
                  onClick={onClose}
                  className={classes.link}
                >
                  Shelters
                </NavLink>
                <hr />
                <NavLink
                  to="/donate"
                  onClick={onClose}
                  className={classes.link}
                >
                  Donate
                </NavLink>
                <hr />
                <NavLink to="/about" onClick={onClose} className={classes.link}>
                  About
                </NavLink>
                <hr />
                <NavLink to="/resources" onClick={onClose} className={classes.link}>
                  Resources
                </NavLink>
              </section>
            </DrawerBody>
          </DrawerContent>
      </Drawer>
    </ChakraProvider>
  );
}
