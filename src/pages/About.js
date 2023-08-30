import React from "react";
import classes from "./About.module.css";
import { ChevronDownIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { ChakraProvider, Text, Show, Hide } from "@chakra-ui/react";
import Lucas from "../images/Lucas.png";
import Charis from "../images/Charis.png";
import Shaan from "../images/shaan.png";
import Christopher from "../images/Christopher.png";
import Dhruv from "../images/Dhruv.png";
import Zain from "../images/Zain.png";
import Sri from "../images/Sri.png";
import Sophia from "../images/Sophia.png";
import Edward from "../images/Edward.png";
import Joshua from "../images/Joshua.png";
import Zeke from "../images/Zeke.png";
import Xarrow, { useXarrow } from "react-xarrows";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

export default function About() {
  return (
    <ChakraProvider>
      <div className="page" onLoad={useXarrow()}>
        <div className={classes.about}>
          <div className={classes.headings}>
            <Text
              textAlign="center"
              fontSize={{ base: "25px", md: "31px", lg: "31px" }}
              maxWidth={{ base: "260px", md: "600px", lg: "600px" }}
              mt="90px"
            >
              Vrtx gives the
            </Text>
            <Text
              textAlign="center"
              fontSize={{ base: "30px", md: "35px", lg: "45px" }}
              letterSpacing="0.2em"
              mt="30px"
              maxWidth={{ base: "400px", md: "900px", lg: "1500px" }}
            >
              <span
                style={{
                  textShadow: "0px 0px 1px #ffffff",
                  fontWeight: "bold",
                }}
              >
                Technology{" "}
              </span>{" "}
              <span style={{ textShadow: "0 0 6px #ffffff" }}>to help</span>{" "}
              <span
                style={{
                  textShadow: "0px 0px 1px #ffffff",
                  fontWeight: "bold",
                }}
              >
                Homeless Communities
              </span>
            </Text>
            <Text
              textAlign="center"
              letterSpacing="0.02em"
              fontSize={{ base: "19px", md: "23px", lg: "23px" }}
              lineHeight="1.3em"
              fontWeight="200"
              maxWidth={{ base: "600px", md: "600px", lg: "600px" }}
              overflow="wrap"
              m={{
                base: "70px 30px 0px 30px",
                md: "70px 50px 0px 50px",
                lg: "70px 50px 0px 50px",
              }}
            >
              Vrtx is a 501(c)(3) nonprofit with a simple goal – to benefit
              homeless communities using innovative technology.
            </Text>
            <AnimationOnScroll
              className={classes.arrow}
              animateIn="animate__bounceIn"
              duration={2}
              animateOnce={true}
              offset="0"
              animatePreScroll={true}
            >
              <ChevronDownIcon boxSize="2em"></ChevronDownIcon>
            </AnimationOnScroll>
          </div>
          <div className={classes.explain}>
            <Text
              m="0 50px"
              alignSelf="center"
              textAlign="center"
              fontSize={{ base: "19px", md: "31px", lg: "35px" }}
              maxWidth={{ base: "500px", md: "600px", lg: "800px" }}
              lineHeight="normal"
              fontWeight="500"
            >
              The technology is out there. The next step is to harness it for
              the benefit of the community.
            </Text>
            <Text
              textAlign="center"
              mt={{ base: "50px", md: "100px", lg: "100px" }}
              fontSize={{ base: "38px", md: "43px", lg: "53px" }}
            >
              Why?
            </Text>
            <div className={classes.outer}>
              <Text
                textAlign="center"
                fontSize={{ base: "20px", md: "28px", lg: "30px" }}
                lineHeight="normal"
                width={{ base: "250px", md: "330px", lg: "360px" }}
                ml={{ base: "-130px", md: "30px", lg: "90px" }}
                mt={{ base: "10px", md: "50px", lg: "50px" }}
                fontWeight="300"
              >
                <span style={{ color: "#61615F", fontStyle: "italic" }}>
                  Homeless shelters
                </span>{" "}
                are under pressure because they lack adequate resources
              </Text>

              <Text
                textAlign="center"
                fontSize={{ base: "20px", md: "28px", lg: "30px" }}
                lineHeight="normal"
                width={{ base: "230px", md: "300px", lg: "330px" }}
                ml={{ base: "-115px", md: "-360px", lg: "-420px" }}
                mt={{ base: "60px", md: "-50px", lg: "-50px" }}
                fontWeight="300"
              >
                <span style={{ color: "#61615F", fontStyle: "italic" }}>
                  Volunteers and donators
                </span>{" "}
                aren't given easy to access information on where help is needed.
              </Text>
            </div>

            <Text
              alignSelf="center"
              textAlign="center"
              mt={{ base: "60px", md: "60px", lg: "60px" }}
              fontSize={{ base: "20px", md: "28px", lg: "30px" }}
              lineHeight="normal"
              maxWidth={{ base: "250px", md: "330px", lg: "350px" }}
              fontWeight="300"
            >
              <span style={{ color: "#61615F", fontStyle: "italic" }}>
                Technology
              </span>{" "}
              can be used to benefit everyone involved.
            </Text>

            <Text
              textAlign="center"
              alignSelf="center"
              fontSize={{ base: "20px", md: "30px", lg: "32px" }}
              lineHeight="normal"
              margin={{
                base: "130px 40px 0 40px",
                md: "170px 50px 0 50px",
                lg: "170px 50px 0 50px",
              }}
              maxWidth={{ md: "800", lg: "900" }}
            >
              After consulting local homeless shelters, one of the{" "}
              <span style={{ color: "#61615F" }}>largest {" "}</span>
              problems they face is the process of finding{" "}
              <span style={{ color: "#61615F" }}>volunteers.</span>
            </Text>
            <Text
              textAlign="center"
              alignSelf="center"
              fontSize={{ base: "17", md: "21", lg: "25px" }}
              lineHeight="1.35em"
              fontWeight="200"
              letterSpacing="0.03em"
              margin="100px 50px 0 50px"
              maxWidth={{ md: "750", lg: "850" }}
            >
              Filled with inspiration, we set out to fix this issue through
              technology and spreading the word.
            </Text>
            <Text
              textAlign="center"
              fontSize="17px"
              mt="100px"
              fontWeight="200"
            >
              Our Leadership Team
            </Text>
            <ArrowDownIcon
              boxSize="3em"
              className={classes.arrow2}
            ></ArrowDownIcon>
          </div>
          <Hide breakpoint="(max-width: 768px)">
            <div>
              <Text
                textAlign="center"
                mt={{ base: "10px", md: "50px", lg: "50px" }}
                mb="50px"
                fontSize="36px"
              >
                Executive Profiles
              </Text>
              <div className={classes.tree}>
                <div id="lucas" className={classes.shaan}>
                  <img src={Lucas} className={classes.clip1} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Lucas Johansson <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      Chief Executive Officer, <br />
                      President, <br />
                      Co-founder
                    </span>
                  </Text>
                </div>
                <section className={classes.tree1}>
                  <div id="charis">
                    <img src={Charis} className={classes.clip1} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Charis Zhang
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        Co-founder, Chairman
                      </span>
                    </Text>
                  </div>
                  <div id="shaan">
                    <img src={Shaan} className={classes.clip1} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Shaan Shabbir
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        VP of Marketing
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="charis"
                    end="shaan"
                    showHead={false}
                    color="gray"
                  />
                </section>
                <section className={classes.tree2}>
                  <div id="christopher">
                    <img src={Christopher} className={classes.clip1} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Christopher Lee <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        VP of Business Development
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="lucas"
                    end="christopher"
                    showHead={true}
                    path="grid"
                    gridBreak="80%"
                    color="gray"
                  />
                  <div id="dhruv">
                    <img src={Dhruv} className={classes.clip3} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Dhruv Bhatt
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        VP of External Affairs
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="lucas"
                    end="dhruv"
                    endAnchor={{ position: "top", offset: { x: -14 } }}
                    showHead={true}
                    path="grid"
                    gridBreak="80%"
                    color="gray"
                  />
                  <div id="zain">
                    <img src={Zain} className={classes.clip1} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Zain Shabbir
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        VP of Research
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="lucas"
                    end="zain"
                    showHead={true}
                    path="grid"
                    gridBreak="80%"
                    color="gray"
                  />
                </section>
                <section className={classes.tree3}>
                  <div id="sri">
                    <img src={Sri} className={classes.clip3} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Sri Chandramauli
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        Director, <br />
                        Material Research
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="christopher"
                    end="christopher"
                    startAnchor="bottom"
                    endAnchor={{ position: "bottom", offset: { y: 30 } }}
                    showHead={false}
                    path="grid"
                    gridBreak="80%"
                    color="gray"
                  />
                  <Xarrow
                    start="zain"
                    end="zain"
                    startAnchor="bottom"
                    endAnchor={{ position: "bottom", offset: { y: 30 } }}
                    showHead={false}
                    path="grid"
                    gridBreak="80%"
                    color="gray"
                  />
                  <Xarrow
                    start="christopher"
                    end="zain"
                    startAnchor={{
                      position: "bottom",
                      offset: { x: -2, y: 30 },
                    }}
                    endAnchor={{ position: "bottom", offset: { x: 2, y: 30 } }}
                    showHead={false}
                    path="grid"
                    gridBreak="80%"
                    color="gray"
                  />
                  <Xarrow
                    start="dhruv"
                    end="sri"
                    showHead={true}
                    startAnchor="bottom"
                    endAnchor="top"
                    path="grid"
                    gridBreak="70%"
                    color="gray"
                  />
                  <div id="sophia">
                    <img src={Sophia} className={classes.clip1} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Sophia Johnson
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        President, <br />
                        Redwood Club
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="dhruv"
                    end="sophia"
                    showHead={true}
                    startAnchor="bottom"
                    endAnchor="top"
                    path="grid"
                    gridBreak="70%"
                    color="gray"
                  />
                  <div id="edward">
                    <img src={Edward} className={classes.clip3} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Edward Tak
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        Director, <br />
                        Public Relations
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="dhruv"
                    end="edward"
                    showHead={true}
                    startAnchor="bottom"
                    endAnchor="top"
                    path="grid"
                    gridBreak="70%"
                    color="gray"
                  />
                  <div id="joshua">
                    <img src={Joshua} className={classes.clip3} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Joshua Ye
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        Communications Officer
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="dhruv"
                    end="joshua"
                    showHead={true}
                    startAnchor="bottom"
                    endAnchor="top"
                    path="grid"
                    gridBreak="70%"
                    color="gray"
                  />
                </section>
                <section className={classes.tree4}>
                  <div id="madeleine">
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Madeleine Cassidy
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        VP, Redwood Club
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="sophia"
                    end="madeleine"
                    showHead={true}
                    startAnchor="bottom"
                    endAnchor="top"
                    path="grid"
                    gridBreak="70%"
                    color="gray"
                  />
                  <div id="steven">
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Steven Chen
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        Treasurer, Redwood Club
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="sophia"
                    end="steven"
                    showHead={true}
                    startAnchor="bottom"
                    endAnchor="top"
                    path="grid"
                    gridBreak="70%"
                    color="gray"
                  />
                  <div id="zeke">
                    <img src={Zeke} className={classes.clip3} />
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      lineHeight="normal"
                    >
                      Zeke Kumar
                      <br />
                      <span style={{ fontWeight: 200, fontSize: "16px" }}>
                        Networking Officer
                      </span>
                    </Text>
                  </div>
                  <Xarrow
                    start="edward"
                    end="zeke"
                    showHead={true}
                    startAnchor="bottom"
                    endAnchor="top"
                    path="grid"
                    gridBreak="70%"
                    color="gray"
                  />
                </section>
              </div>
            </div>
          </Hide>
          <Show breakpoint="(max-width: 768px)">
            <div>
              <Text
                textAlign="center"
                mt={{ base: "10px", md: "50px", lg: "50px" }}
                mb="50px"
                fontSize="36px"
              >
                Executive Profiles
              </Text>
              <div className={classes.mobiletree}>
                <div id="Lucas">
                  <img src={Lucas} className={classes.clip1} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Lucas Johansson <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      Chief Executive Officer, <br />
                      President, <br/>
                      Co-founder 
                    </span>
                  </Text>
                </div>
                <div id="charis">
                  <img src={Charis} className={classes.clip1} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Charis Zhang
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      Co-founder, Chairman
                    </span>
                  </Text>
                </div>
                <div id="shaan">
                  <img src={Shaan} className={classes.clip1} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Shaan Shabbir
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      VP of Marketing
                    </span>
                  </Text>
                </div>
                <div id="christopher">
                  <img src={Christopher} className={classes.clip1} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Christopher Lee <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      VP of Business Development
                    </span>
                  </Text>
                </div>
                <div id="dhruv">
                  <img src={Dhruv} className={classes.clip3} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Dhruv Bhatt
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      VP of External Affairs
                    </span>
                  </Text>
                </div>
                <div id="zain">
                  <img src={Zain} className={classes.clip1} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Zain Shabbir
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      VP of Research
                    </span>
                  </Text>
                </div>
                <div id="sri">
                  <img src={Sri} className={classes.clip3} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Sri Chandramauli
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      Director, <br />
                      Material Research
                    </span>
                  </Text>
                </div>
                <div id="sophia">
                  <img src={Sophia} className={classes.clip1} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Sophia Johnson
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      President, <br />
                      Redwood Club
                    </span>
                  </Text>
                </div>
                <div id="edward">
                  <img src={Edward} className={classes.clip3} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Edward Tak
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      Director, <br />
                      Public Relations
                    </span>
                  </Text>
                </div>
                <div id="joshua">
                  <img src={Joshua} className={classes.clip3} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Joshua Ye
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      Communications Officer
                    </span>
                  </Text>
                </div>
                <div id="zeke">
                  <img src={Zeke} className={classes.clip3} />
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Zeke Kumar
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      Networking Officer
                    </span>
                  </Text>
                </div>
                <div id="madeleine">
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Madeleine Cassidy
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      VP, Redwood Club
                    </span>
                  </Text>
                </div>
                <div id="steven">
                  <Text textAlign="center" fontSize="20px" lineHeight="normal">
                    Steven Chen
                    <br />
                    <span style={{ fontWeight: 200, fontSize: "16px" }}>
                      Treasurer, Redwood Club
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </Show>
          <div>
            <div className={classes.grid}>
              <div className={classes.board}>
                <Text fontSize={{ base: "36px", md: "36px", lg: "36px" }}>
                  Board of Directors
                </Text>
              </div>
              <div className={classes.box1}>
                <Text fontSize={{ base: "30px", md: "20px", lg: "20px" }}>
                  Charis Zhang
                </Text>
                <Text
                  mt="10px"
                  fontSize={{ base: "18px", md: "13px", lg: "15px" }}
                >
                  Chairman of the Board <br />
                  Vertex Biology <br />
                  Co-founder & COO{" "}
                  <a
                    href="https://www.stiddle.com/"
                    target="_blank"
                    style={{ color: "#3D9BE9", fontWeight: 300 }}
                  >
                    Stiddle
                  </a>
                </Text>
              </div>
              <div className={classes.box2}>
                <Text fontSize={{ base: "30px", md: "20px", lg: "20px" }}>
                  Shaan Shabbir
                </Text>
                <Text
                  mt="10px"
                  fontSize={{ base: "18px", md: "13px", lg: "15px" }}
                >
                  VP of Marketing <br />
                  Vertex Biology
                </Text>
              </div>
              <div className={classes.box3}>
                <Text fontSize={{ base: "30px", md: "20px", lg: "20px" }}>
                  Dhruv Bhatt
                </Text>
                <Text
                  mt="10px"
                  fontSize={{ base: "18px", md: "13px", lg: "15px" }}
                >
                  VP of External Affairs Vertex Biology <br />
                  Founder{" "}
                  <a
                    href="https://teensinhealth.org/"
                    target="_blank"
                    style={{ color: "#3D9BE9", fontWeight: 300 }}
                  >
                    Teens in Health
                  </a>
                </Text>
              </div>
              <div className={classes.box4}>
                <Text fontSize={{ base: "30px", md: "20px", lg: "20px" }}>
                  James F. Bender
                </Text>
                <Text
                  mt="10px"
                  fontSize={{ base: "18px", md: "13px", lg: "15px" }}
                >
                  Co-founder & CEO <br />
                  <a
                    href="https://www.stiddle.com/"
                    target="_blank"
                    style={{ color: "#3D9BE9", fontWeight: 300 }}
                  >
                    Stiddle
                  </a>
                </Text>
              </div>
              <div className={classes.box5}>
                <Text fontSize={{ base: "30px", md: "20px", lg: "20px" }}>
                  Arham Habib
                </Text>
                <Text
                  mt="10px"
                  fontSize={{ base: "18px", md: "13px", lg: "15px" }}
                >
                  Researcher <br />
                  <a
                    href="https://riskcenter.wharton.upenn.edu/business-climate-and-environment-lab/"
                    target="_blank"
                    style={{ color: "#3D9BE9", fontWeight: 300 }}
                  >
                    Wharton Climate Decisions Center
                  </a>
                </Text>
              </div>
              <div className={classes.box6}>
                <Text fontSize={{ base: "30px", md: "20px", lg: "20px" }}>
                  Daniel Zhu
                </Text>
                <Text
                  mt="10px"
                  fontSize={{ base: "18px", md: "13px", lg: "15px" }}
                >
                  Strategy Consultant <br />
                  <a
                    href="https://www.berkeleyvss.com/"
                    target="_blank"
                    style={{ color: "#3D9BE9", fontWeight: 300 }}
                  >
                    Berkeley Venture Strategy Solutions
                  </a>
                </Text>
              </div>
              <div className={classes.box7}>
                <Text fontSize={{ base: "30px", md: "20px", lg: "20px" }}>
                  Joshua Paulose
                </Text>
                <Text
                  mt="10px"
                  fontSize={{ base: "18px", md: "13px", lg: "15px" }}
                >
                  Chief Advisor <br />
                  <span style={{ color: "#3D9BE9", fontWeight: 300 }}>
                    Pole Star Advisors PTE
                  </span>
                </Text>
              </div>
              <div className={classes.box8}>
                <Text fontSize={{ base: "30px", md: "20px", lg: "20px" }}>
                  Raymond Fang
                </Text>
                <Text
                  mt="10px"
                  fontSize={{ base: "18px", md: "13px", lg: "15px" }}
                >
                  Researcher <br />
                  <a
                    href="https://blockchainatcolumbia.com/"
                    target="_blank"
                    style={{ color: "#3D9BE9", fontWeight: 300 }}
                  >
                    Columbia Blockchain
                  </a>
                </Text>
              </div>
              <div className={classes.box9}>
                <Text fontSize={{ base: "30px", md: "20px", lg: "20px" }}>
                  Sheshank Shankar
                </Text>
                <Text
                  mt="10px"
                  fontSize={{ base: "18px", md: "13px", lg: "15px" }}
                >
                  CEO <br />
                  <a
                    href="https://defhacks.co/"
                    target="_blank"
                    style={{ color: "#3D9BE9", fontWeight: 300 }}
                  >
                    Def Hacks
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
