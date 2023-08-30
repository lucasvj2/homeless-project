import React from "react";
import { csv } from "d3-fetch";
import { useState, useEffect, } from "react";
import { ChakraProvider, CircularProgress, Text } from "@chakra-ui/react";
import {
  Box,
} from "@chakra-ui/react";
import Card from "../components/Card";
import classes from "./Donate.module.css";

export default function Donate() {
  const [data, setData] = useState([]);
  const [multiplier, setMultiplier] = useState(2);
  const [text, setText] = useState("");

  useEffect(() => {
    handleClick();
  }, [])

  const options = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: 0,
  };

  useEffect(() => {
    const data = csv("/allshelters-finished.csv");
    data.then((locations) => {
      setData(locations);
    });
  }, []);

  let outlist = [];
  if (data) {
    outlist = data.slice(0, 20).map((elem) => {
      return (
        <Card
          name={elem.name}
          Number={elem.Number}
          Street={elem.Street}
          City={elem.City}
          State={elem.State}
          Zip={elem.Zip}
          key={elem.url}
          url={elem.url}
        />
      );
    });
  }

  useEffect(() => {
    data.sort(compare);
  }, [multiplier]);

  function success(pos) {
    const crd = pos.coords;
    const latitude = crd.latitude;
    const longitude = crd.longitude;

    setData((prevData) => {
      const newData = prevData.map((point) => {
        const distance = Math.pow(
          Math.pow(point.Latitude - latitude, 2) +
            Math.pow(point.Longitude - longitude, 2),
          0.5
        );
        return {
          ...point,
          distance: distance,
        };
      });
      newData.sort(compare);
      setText("DONE");
      return newData;
    });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    setText("Error: Can't get location. Allow location in settings")
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  };

  const compare = (a, b) => {
    if (a.distance < b.distance) {
        return -1;
    } else if (a.distance > b.distance) {
        return 1;
    }
    return 0;
  };

  const handleClick = () => {
    getLocation();
    setText(
      <CircularProgress
        isIndeterminate
        color="green.300"
        thickness="15px"
        size="30px"
      />
    );
  };

  return (
    <ChakraProvider>
      <div className="page1">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          className={classes.instructions}
          height={{ base: "200px", md: "300px", lg: "400px" }}
        >
          <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
            Nearest Shelters
          </Text>
          <Text fontSize={{ base: "15px", md: "30px", lg: "39px" }}>
            Tool that finds the closest shelters to <br/> to your
            location
          </Text>
          {text === "DONE" ? (
            <div />
          ) : (
            <Box onClick={handleClick} mt="50px" fontSize="16px">
              {text}
            </Box>
          )}
        </Box>
        <Box className={classes.layout}>
        {text === "DONE" ? (
          <div className={classes.list}>{outlist}</div>
        ) : (
          <div />
        )}
      </Box>
      </div>
      
    </ChakraProvider>
  );
}
