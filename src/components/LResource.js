import React from "react";
import classes from "./LResource.module.css";
import { ChakraProvider, Button, Image, Box, Text } from "@chakra-ui/react";

export default function LResource(props) {
  console.log(props.img);
  return (
    <ChakraProvider>
      <Box
        mt="50px"
        mb="50px"
        display="flex"
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
      >
        <a className={classes.card} href={props.link} target="_blank">
            <Text textAlign="center" fontSize="2em" fontWeight="600">
              {props.title}
            </Text>
            <Text textAlign="center">{props.desc}</Text>
        </a>
      </Box>
    </ChakraProvider>
  );
}
