import { chakra, Container, Heading } from "@chakra-ui/react";
import NotFound from "../../components/404/404";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Spinner from "../../components/Loader/Spinner";
import { useParams } from "react-router-dom";
import axios from "axios";
import Baseurl from "../../baseurl";
const variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};
const GenrePage = () => {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState("");
  const { name } = useParams();
  const fetchGenre = async () => {
    const res = await axios({
      url: `${Baseurl}/genre/${name}`,
      method: "GET",
    });
    res.data.success || res.data.statusCode === 404
      ? isLoading(false) || setData(res.data.data)
      : setData(null);
  };
  useEffect(() => {
    fetchGenre();
  }, []);
  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
      <Helmet>
        <title>{name} - SongsLyrics</title>
      </Helmet>
      <Container mt={"20px"} maxW={"8xl"} height={"600px"}>
        {loading ? (
          <Spinner />
        ) : data == "Not found" ? (
          <NotFound />
        ) : (
          <chakra.h1 fontWeight={900} fontSize={{ base: "xl", md: "2xl" }}>
            Collection of {name.toLocaleUpperCase()} Songs
          </chakra.h1>
        )}
      </Container>
    </motion.div>
  );
};

export default GenrePage;
