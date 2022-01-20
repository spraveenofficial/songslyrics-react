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
import "./style.scss";
import Search from "../../components/Search/Search";
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

const GenrePage = () => {
  const skillVariants = socialVariants;
  const skillItemVariants = socialItemVariants;
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);
  const { name } = useParams();
  const fetchGenre = async () => {
    const res = await axios({
      url: `${Baseurl}/genre/${name}`,
      method: "GET",
    });
    setData(res.data);
    isLoading(false);
  };
  useEffect(() => {
    isLoading(true);
    fetchGenre();
    window.scrollTo(0, 0);
  }, [name]);
  return (
    <Container  maxW={"7xl"}>
      <Helmet>
        <title>{name} - SongsLyrics</title>
      </Helmet>
      <SimpleGrid
        templateColumns={{ base: "1fr", md: "3fr 1fr" }}
        spacingX="10"
        spacingy="10"
      >
        <Box marginTop={"10px"} padding={{ base: "0", md: "20px" }}>
          {loading ? (
            <Spinner />
          ) : data != [] && data.success == false ? (
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
                {data.data
                  ? data.data.map((item) => (
                      <motion.div key={item._id} variants={skillItemVariants}>
                        <SongsCard
                          key={item.name}
                          cover={item.songImage}
                          icoPos={item.icon_position}
                          infoPos={item.info_position}
                          objIco={item.icon}
                          name={item.songName}
                          type={item.songLanguage}
                          year={item.year}
                          path={item.path}
                        />
                      </motion.div>
                    ))
                  : ""}
              </motion.div>
            </motion.div>
          )}
        </Box>
        <Box padding={{ base: "0", md: "20px" }}>
          <Search />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default GenrePage;
