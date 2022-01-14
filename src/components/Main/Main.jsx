import { Container, chakra } from "@chakra-ui/react";
import "./Main.scss";
import Cards from "../GenreCards/Cards";
import { motion } from "framer-motion";
import genreBG1 from "../../assets/svg/1.svg";
import genreBG2 from "../../assets/svg/2.svg";
import genreBG3 from "../../assets/svg/3.svg";
import genreBG4 from "../../assets/svg/4.svg";
import genreBG5 from "../../assets/svg/5.svg";
import genreBG6 from "../../assets/svg/6.svg";
import genreBG7 from "../../assets/svg/7.svg";
import genreBG8 from "../../assets/svg/8.svg";
const Main = () => {
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
  const genre = [
    {
      name: "Hindi",
      type: "",
      cover: genreBG2,
      icon: "javascript",
      svg_icon: true,
      icon_position: "top right",
      info_position: "bottom left",
      path: "/genre/hindi",
    },
    {
      name: "English",
      type: "",
      cover: genreBG1,
      icon: "python",
      svg_icon: true,
      icon_position: "top left",
      info_position: "bottom right",
      path: "/genre/english",
    },
    {
      name: "Bhakti",
      type: "",
      cover: genreBG3,
      icon: "sass",
      svg_icon: true,
      icon_position: "bottom left",
      info_position: "top right",
      path: "/genre/bhakti",
    },
    {
      name: "Gujarati",
      type: "",
      cover: genreBG4,
      icon: "java",
      svg_icon: true,
      icon_position: "bottom right",
      info_position: "top left",
      path: "/genre/gujrati",
    },
    {
      name: "Kannada",
      type: "",
      cover: genreBG5,
      icon: "node",
      svg_icon: true,
      icon_position: "top right",
      info_position: "bottom left",
      path: "/genre/kannada",
    },
    {
      name: "Bhojpuri",
      type: "",
      cover: genreBG5,
      icon: "node",
      svg_icon: true,
      icon_position: "top right",
      info_position: "bottom left",
      path: "/genre/bhojpuri",
    },
    {
      name: "Haryanvi",
      type: "",
      cover: genreBG6,
      icon: "ri-reactjs-fill",
      icon_position: "top left",
      info_position: "bottom right",
      path: "/genre/haryanvi",
    },
    {
      name: "Malayalam",
      type: "",
      cover: genreBG8,
      icon: "framermotion",
      svg_icon: true,
      icon_position: "bottom right",
      info_position: "top left",
      path: "/genre/malayalam",
    },
    {
      name: "Marathi",
      type: "",
      cover: genreBG7,
      icon: "mongoDB",
      svg_icon: true,
      icon_position: "top left",
      info_position: "bottom right",
      path: "/genre/marathi",
    },
    {
      name: "Punjabi",
      type: "",
      cover: genreBG4,
      icon: "cprogramLogo",
      svg_icon: true,
      icon_position: "bottom right",
      info_position: "top left",
      path: "/genre/punjabi",
    },
    {
      name: "Sanskrit",
      type: "",
      cover: genreBG2,
      icon: "cpluslogo",
      svg_icon: true,
      icon_position: "top left",
      info_position: "bottom right",
      path: "/genre/sanskrit",
    },
    {
      name: "Tamil",
      type: "",
      cover: genreBG3,
      icon: "gitLogo",
      svg_icon: true,
      icon_position: "bottom left",
      info_position: "top right",
      path: "/genre/tamil",
    },
  ];
  return (
    <Container maxW={"7xl"} bg="inherit">
      <chakra.h1
        fontWeight={900}
        fontSize={{ base: "2xl", md: "3xl" }}
        textAlign={"center"}
        padding={"20px"}
      >
        Categories we Have
      </chakra.h1>
      <section id="section420" className="skills_section">
        <div className="container">
          <motion.div
            className="grid"
            variants={skillVariants}
            initial="hidden"
            animate={"show"}
          >
            {genre.map((item) => (
              <motion.div variants={skillItemVariants}>
                <Cards
                  key={item.name}
                  cover={item.cover}
                  icoPos={item.icon_position}
                  infoPos={item.info_position}
                  objIco={item.icon}
                  name={item.name}
                  type={item.type}
                  rawsvg={item.svg_icon}
                  path={item.path}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default Main;
