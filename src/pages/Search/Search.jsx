import { SimpleGrid, Box, chakra, Container, Heading } from "@chakra-ui/react";
import NotFound from "../../components/404/404";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Spinner from "../../components/Loader/Spinner";
import { useParams } from "react-router-dom";
import axios from "axios";
import SongsCard from "../../components/SongsCard/Songs";
import Baseurl from "../../baseurl";
import SearchComp from "../../components/Search/Search";

export default function Search() {
  const socialVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
        staggerChildren: 0.2,
      },
    },
  };
  const socialItemVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const skillVariants = socialVariants;
  const skillItemVariants = socialItemVariants;
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container maxW={"8xl"}>
          <Helmet>
            <title>Search - SongsLyrics</title>
          </Helmet>
          <SimpleGrid
            templateColumns={{ base: "1fr", md: "3fr 1fr" }}
            spacingX="10"
            spacingy="10"
          >
            <Box marginTop={"10px"} padding={{ base: "0", md: "20px" }}>
              {data != [] && data.success == false ? (
                <NotFound />
              ) : (
                <motion.div id="section420" className="skills_section">
                  {/* <motion.h1 className="lyrics__title">{name} Lyrics</motion.h1> */}
                  <motion.div
                    className="grid"
                    variants={skillVariants}
                    initial="hidden"
                    animate={"show"}
                  >
                    <h1>Loaded</h1>
                  </motion.div>
                </motion.div>
              )}
            </Box>
            <Box margin="20px 0px" display={"flex"} flexShrink={10}>
              <SearchComp />
            </Box>
          </SimpleGrid>
        </Container>
      )}
    </>
  );
}
