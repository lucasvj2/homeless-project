import React from "react";
import { useState, useEffect } from "react";
import Resource from "../components/Resource";
import classes from "./Resources.module.css";
import { Text } from "@chakra-ui/react";
import { data } from "../components/counties";
import LResource from "../components/LResource";
import {
  Flex,
  FormControl,
  ChakraProvider,
  CircularProgress,
  Box,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import image1 from "./1.png"


const config = [
  { value: "Alameda County", label: "Alameda County" },
  { value: "Alpine County", label: "Alpine County" },
  { value: "Amador County", label: "Amador County" },
  { value: "Butte County", label: "Butte County" },
  { value: "Calaveras County", label: "Calaveras County" },
  { value: "Colusa County", label: "Colusa County" },
  { value: "Contra Costa County", label: "Contra Costa County" },
  { value: "Del Norte County", label: "Del Norte County" },
  { value: "El Dorado County", label: "El Dorado County" },
  { value: "Fresno County", label: "Fresno County" },
  { value: "Glenn County", label: "Glenn County" },
  { value: "Humboldt County", label: "Humboldt County" },
  { value: "Imperial County", label: "Imperial County" },
  { value: "Inyo County", label: "Inyo County" },
  { value: "Kern County", label: "Kern County" },
  { value: "Kings County", label: "Kings County" },
  { value: "Lake County", label: "Lake County" },
  { value: "Lassen County", label: "Lassen County" },
  { value: "Los Angeles County", label: "Los Angeles County" },
  { value: "Madera County", label: "Madera County" },
  { value: "Marin County", label: "Marin County" },
  { value: "Mariposa County", label: "Mariposa County" },
  { value: "Mendocino County", label: "Mendocino County" },
  { value: "Merced County", label: "Merced County" },
  { value: "Modoc County", label: "Modoc County" },
  { value: "Mono County", label: "Mono County" },
  { value: "Monterey County", label: "Monterey County" },
  { value: "Napa County", label: "Napa County" },
  { value: "Nevada County", label: "Nevada County" },
  { value: "Orange County", label: "Orange County" },
  { value: "Placer County", label: "Placer County" },
  { value: "Plumas County", label: "Plumas County" },
  { value: "Riverside County", label: "Riverside County" },
  { value: "Sacramento County", label: "Sacramento County" },
  { value: "San Benito County", label: "San Benito County" },
  { value: "San Bernardino County", label: "San Bernardino County" },
  { value: "San Diego County", label: "San Diego County" },
  { value: "San Francisco County", label: "San Francisco County" },
  { value: "San Joaquin County", label: "San Joaquin County" },
  { value: "San Luis Obispo County", label: "San Luis Obispo County" },
  { value: "San Mateo County", label: "San Mateo County" },
  { value: "Santa Barbara County", label: "Santa Barbara County" },
  { value: "Santa Clara County", label: "Santa Clara County" },
  { value: "Santa Cruz County", label: "Santa Cruz County" },
  { value: "Shasta County", label: "Shasta County" },
  { value: "Sierra County", label: "Sierra County" },
  { value: "Siskiyou County", label: "Siskiyou County" },
  { value: "Solano County", label: "Solano County" },
  { value: "Sonoma County", label: "Sonoma County" },
  { value: "Stanislaus County", label: "Stanislaus County" },
  { value: "Sutter County", label: "Sutter County" },
  { value: "Tehama County", label: "Tehama County" },
  { value: "Trinity County", label: "Trinity County" },
  { value: "Tulare County", label: "Tulare County" },
  { value: "Tuolumne County", label: "Tuolumne County" },
  { value: "Ventura County", label: "Ventura County" },
  { value: "Yolo County", label: "Yolo County" },
  { value: "Yuba County", label: "Yuba County" },
];

export default function Resources() {
  const [text, setText] = useState("");
  const [countyState, setCountyState] = useState("");

  useEffect(() => {
    getLocation();
    setText(
      <CircularProgress
        isIndeterminate
        color="green.300"
        thickness="15px"
        size="30px"
      />
    );
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  };

  function error(err) {
    console.log(err);
    setText("done")
  }
  const options = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    const latitude = crd.latitude;
    const longitude = crd.longitude;
    console.log(crd);
    setText("done");

    fetch(
      `https://geo.fcc.gov/api/census/area?lat=${crd.latitude}&lon=${crd.longitude}&censusYear=2020&format=json`
    )
      .then((res) => res.json())
      .then((json) => {
        setCountyState(json.results[0].county_name);
      });
  }

  console.log(countyState);

  function handleSelect(props) {
    setCountyState(props.item.value);
    setText("done");
  }

  function handleEmpty(props) {
    return <h1>no county found</h1>;
  }

  let count = 0;
  let image = "image"
  return (
    <ChakraProvider>
      <div className="page">
        <Text fontSize="3rem" fontWeight="700" textAlign="center" m="30px">
          Local Resources
        </Text>
        {text === "done" ? (
          <div>
            <Flex justify="center" align="center" w="full">
              <FormControl w="60">
                <AutoComplete
                  onSelectOption={handleSelect}
                  emptyState={handleEmpty}
                >
                  <AutoCompleteInput
                    variant="filled"
                    placeholder="Search other counties"
                    autoFocus
                  />
                  <AutoCompleteList>
                    {config.map((county, cid) => (
                      <AutoCompleteItem
                        key={`option-${cid}`}
                        value={county.value}
                        align="center"
                      >
                        {county.value}
                      </AutoCompleteItem>
                    ))}
                  </AutoCompleteList>
                </AutoComplete>
              </FormControl>
            </Flex>
            <div>
              {countyState ? (
                <Text
                  fontSize="2.5rem"
                  fontWeight="700"
                  textAlign="center"
                  mt="30px"
                >
                  {countyState}
                </Text>
              ) : (
                <h1></h1>
              )}
            </div>
            {countyState ? (
              <div>
                {data.california.counties.properties.map((county) => {
                  if (county.name.localeCompare(countyState) === 0) {
                    count = count + 1;
                    image += count;
                    return county.resources.map((item) => (
                      <LResource
                        title={item.name}
                        link={item.link}
                        desc={item.desc}
                        key={item.name}
                      ></LResource>
                    ));
                  }
                })}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <Box mt="50px" fontSize="16px" align="center" justify="center">
            {text}
          </Box>
        )}

        <div>
          <Text fontSize="3rem" fontWeight="700" textAlign="center" m="30px">
            General Resources
          </Text>
          <div className={classes.cards}>
            <Resource
              title="Food Pantries"
              link="https://www.foodpantries.org/"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Food_Bank_-_The_Noun_Project.svg/640px-Food_Bank_-_The_Noun_Project.svg.png"
              desc="Need access to free food? Search for food pantries in your region. Provides nearby food pantries for all states in the US."
            />
            <Resource
              title="Rent Assistance"
              link="https://www.rentassistance.us/"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Home_Icon_by_Lakas.svg/640px-Home_Icon_by_Lakas.svg.png"
              desc="A directory of rental assistance agencies and organizations that will help you to pay rent, including government organizations and charities."
            />
            <Resource
              title="Affordable Housing"
              link="https://www.publichousing.com/"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Home_Icon_by_Lakas.svg/640px-Home_Icon_by_Lakas.svg.png"
              desc="Find low income and affordable housing through housing assistance organizations and programs. Provides direct phone numbers and utilizes Crowd Sourcing to post the actual cost for people who are living in income based apartments."
            />
            <Resource
              title="Free Treatment Centers"
              link="https://www.freetreatmentcenters.com/"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Noun_Family_Counseling_967309.svg/640px-Noun_Family_Counseling_967309.svg.png"
              desc="Find access to treetment centers that are free, affordable, discounted, low cost, sliding scale or Medicaid. The most affordable treatment for addiction, substance abuse, alcoholism, etc."
            />
            <Resource
              title="Free Dental Care"
              link="https://www.freedentalcare.us/"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Public_Health_Clinic_%286435%29_-_The_Noun_Project.svg/640px-Public_Health_Clinic_%286435%29_-_The_Noun_Project.svg.png"
              desc="A comprehensive list of free or sliding scale dental resources. Find facilities and resources near you."
            />
            <Resource
              title="Free Clinics"
              link="https://www.freeclinics.com/"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Public_Health_Clinic_%286435%29_-_The_Noun_Project.svg/640px-Public_Health_Clinic_%286435%29_-_The_Noun_Project.svg.png"
              desc="Find free or sliding scale clinics near you for uninsured and low income patients."
            />
            <Resource
              title="More Resources"
              link="https://www.hud.gov/"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/OOjs_UI_icon_info_big.svg/640px-OOjs_UI_icon_info_big.svg.png"
              desc="More helpful resources for finding housing, rent relief, food pantries, health clinics, and clothing."
            />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
