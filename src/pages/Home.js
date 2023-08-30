import React, { useState, useEffect, useImperativeHandle } from "react";
import classes from "./Home.module.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Box, ChakraProvider, Text, Link, Hide, Show } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import AnimatedNumbers from "react-animated-numbers";
import ReactTooltip from "react-tooltip";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import video from "../images/video.mp4";

import CAMapChart from "../trialMap/CAMapChart";
import TXMapChart from "../trialMap/TXMapChart";
import WAMapChart from "../trialMap/WAMapChart";
import ILMapChart from "../trialMap/ILMapChart";
import FLMapChart from "../trialMap/FLMapChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Homeless Over Time",
    },
  },
};

export const options1 = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Unsheltered Homeless Over Time",
    },
  },
};

const labels = [2015, 2016, 2017, 2018, 2019, 2020];

export const total = {
  labels,
  datasets: [
    {
      label: "Total Homelessness",
      data: [564708, 549928, 550996, 552830, 567715, 580466],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
export const unsheltered = {
  labels,
  datasets: [
    {
      label: "Unsheltered Homeless",
      data: [173268, 176357, 190129, 194467, 211293, 226080],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Home() {
  const [content, setContent] = useState("");

  const linkStyle = {
    textAlign: "center",
    fontSize: "20px",
    color: "#3D9BE9",
  };

  const centeredText = {
    textAlign: "center",
  };

  const size20 = {
    fontSize: "20px",
  };

  return (
    <ChakraProvider>
      <div className="page">
        <Box overflow="hidden">
          <Text
            className={classes.title}
            fontSize={{ base: "45px", md: "60px", lg: "75px" }}
          >
            Make a Difference.
          </Text>
          <Text
            {...centeredText}
            fontSize={{ base: "20px", md: "22px", lg: "25px" }}
            mt="15px"
          >
            Need permanent housing, food, counseling, or health care?
          </Text>
          <Text {...linkStyle}>
            <Link as={ReachLink} to="/resources">
              Find Local Resources
              <ChevronRightIcon boxSize="1.3em" viewBox="4 1 24 24" />
            </Link>
          </Text>
          <Text
            {...centeredText}
            fontSize={{ base: "20px", md: "22px", lg: "25px" }}
            mt="15px"
          >
            In need of a place to stay? Find your nearest shelters.
          </Text>
          <Text {...linkStyle}>
            <Link as={ReachLink} to="/shelters">
              Find Nearest Shelters
              <ChevronRightIcon boxSize="1.3em" viewBox="4 1 24 24" />
            </Link>
          </Text>
          <Text
            {...centeredText}
            fontSize={{ base: "20px", md: "22px", lg: "25px" }}
          >
            Find shelters that need help near you.
          </Text>
          <Text {...linkStyle}>
            <Link as={ReachLink} to="/donate">
              Donate to Shelters
              <ChevronRightIcon boxSize="1.3em" viewBox="4 1 24 24" />
            </Link>
          </Text>
          
          
        </Box>
        <Hide breakpoint="(max-width: 768px)">
          <Box
            className={classes.map}
            w={{ base: "100%", md: "100%", lg: "100%" }}
            h="fit-content"
          >
            <Box w="800px">
            <CAMapChart setTooltipContent={setContent} />
            </Box>
            <Box w="800px">
            <TXMapChart setTooltipContent={setContent} />
            </Box>
            <Box w="900px">
            <WAMapChart setTooltipContent={setContent} />
            </Box>
            <Box w="900px">
            <ILMapChart setTooltipContent={setContent} />
            </Box>
            <Box w="900px">
            <FLMapChart setTooltipContent={setContent} />
            </Box>
            <ReactTooltip>{content}</ReactTooltip>
          </Box>
        </Hide>
        <Show breakpoint="(max-width: 768px)">
          <Box
            className={classes.verticalDiv}
            w={{ base: "100%", md: "100%", lg: "100%" }}
            h="fit-content"
            alignItems="center"
          >
            <Box h="300px"  w="300px">
              <CAMapChart setTooltipContent={setContent} />
            </Box>
            <Box h="300px"  w="300px">
              <TXMapChart setTooltipContent={setContent} />
            </Box>
            <Box h="300px" w="300px">
            <WAMapChart setTooltipContent={setContent} />
            </Box>
            <Box h="300px" w="300px">
            <ILMapChart setTooltipContent={setContent} />
            </Box>
            <Box h="300px" w="300px">
            <FLMapChart setTooltipContent={setContent} />
            </Box>
            <ReactTooltip>{content}</ReactTooltip>
          </Box>
        </Show>
        <div className={classes.verticalDiv}>
          <div>
            <Text
              {...centeredText}
              fontSize={{ base: "2.3rem", md: "2.7rem", lg: "3rem" }}
              fontWeight="700"
              lineHeight="1.5"
            >
              Shelters Need Your Help
            </Text>
            <Text
              fontSize={{ base: "20px", md: "22px", lg: "25px" }}
              fontWeight="300"
              lineHeight="1.75rem"
              maxW="39rem"
              fontWeight="300"
              margin="auto"
              {...centeredText}
              mb="10px"
            >
              According to a California Business, Consumer Services and Housing
              Agency report, many homeless shelters are underfunded and
              understaffed - shelters in California only have the capacity to
              shelter one out of three individuals facing homelessness.
              Volunteering at a homeless shelter could change someone's life.
            </Text>
            <Text {...linkStyle} mb="100px">
              <Link
                href="https://bcsh.ca.gov/calich/documents/2021_heap_case_study1.pdf"
                isExternal
              >
                Link to Study
                <ChevronRightIcon boxSize="1.3em" viewBox="4 1 24 24" />
              </Link>
            </Text>
          </div>
          <Hide breakpoint="(max-width: 768px)">
            <div className={classes.horizontalDiv}>
              <Box
                position="relative"
                h="40%"
                w={{ md: "370px", lg: "450px" }}
                m="auto"
              >
                <Line data={total} options={options} />
              </Box>
              <Box
                position="relative"
                h="200px"
                w={{ md: "370px", lg: "450px" }}
                m="auto"
              >
                <Line data={unsheltered} options={options1} />
              </Box>
            </div>
          </Hide>
          <Show breakpoint="(max-width: 768px)">
            <div className={classes.verticalDiv}>
              <Box position="relative" h="40%" w="90%" maxW="550px" m="auto">
                <Line data={total} options={options} />
              </Box>
              <Box position="relative" h="40%" w="90%" maxW="550px" m="auto">
                <Line data={unsheltered} options={options1} />
              </Box>
            </div>
          </Show>
        </div>

        <Hide breakpoint="(max-width: 960px)">
          <Box
            m="auto"
            className={classes.horizontalDiv}
            w="fit-content"
            gap="30px"
            mt="120px"
          >
            <div>
              <Text
                fontSize={{ base: "2.3rem", md: "2.5rem", lg: "2.7rem" }}
                color="rgb(0,0,0)"
                fontWeight="700"
                w="450px"
              >
                The Brief Explanation
              </Text>
              <Text
                fontSize={{ base: "20px", md: "22px", lg: "20px" }}
                fontWeight="300"
                w="400px"
              >
                Your location and data on the number of homeless in each
                shelter's region are factored into an algorithm that help
                identify nearby shelters to your preference, who are under
                stress and most need your help.
              </Text>
              <hr className={classes.hr} />
              <Text
                fontSize={{ base: "20px", md: "22px", lg: "20px" }}
                fontWeight="300"
                w="400px"
              >
                If you need a shelter, your location is utilized by an algorithm
                to find the shelters nearest to you.
              </Text>
            </div>

            <video width="500" autoPlay muted loop preload="auto">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Hide>
        <Show breakpoint="(max-width: 960px)" overflow="hidden">
          <Box
            m="auto"
            className={classes.verticalDiv}
            mt="120px"
          >
            <Text
              fontSize={{ base: "2.2rem", md: "2.5rem", lg: "2.7rem" }}
              color="rgb(0,0,0)"
              fontWeight="700"
              {...centeredText}
            >
              The Brief Explanation
            </Text>
            <Text
              fontSize={{ base: "20px", md: "22px", lg: "25px" }}
              fontWeight="300"
              maxW="500px"
              {...centeredText}
              alignSelf="center"
            >
              Your location and data on the number of homeless in each shelter's
              region are factored into an algorithm that help identify nearby
              shelters to your preference, who are under stress and most need
              your help.
            </Text>
            <hr className={classes.hr} />
            <Text
              fontSize={{ base: "20px", md: "22px", lg: "25px" }}
              fontWeight="300"
              maxW="500px"
              alignSelf="center"
              {...centeredText}
              mb="50px"
            >
              If you need a shelter, your location is utilized by an algorithm
              to find the shelters nearest to you.
            </Text>

            <video
              w="100%"
              autoPlay
              muted
              playsInline
              src={video}
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </Box>
        </Show>
        <Text
          fontSize={{ base: "1.8rem", md: "2.5rem", lg: "2.7rem" }}
          color="rgb(0,0,0)"
          fontWeight="700"
          {...centeredText}
          mt="80px"
          overflow="hidden"
        >
          Resources all in one place
        </Text>
        <Text
          fontSize={{ base: "20px", md: "22px", lg: "25px" }}
          fontWeight="300"
          alignSelf="center"
          maxW="600px"
          m="auto"
          {...centeredText}
          overflow="hidden"
        >
          Get quick access to proven food, housing, and healthcare resources all
          in one place.
        </Text>
        <Text {...linkStyle} overflow="hidden">
          <Link as={ReachLink} to="/resources">
            Resources
            <ChevronRightIcon boxSize="1.3em" viewBox="4 1 24 24" />
          </Link>
        </Text>
      </div>
    </ChakraProvider>
  );
}
