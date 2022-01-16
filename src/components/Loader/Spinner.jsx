import { chakra, Container } from "@chakra-ui/react";
import "../../index.css";
import { motion } from "framer-motion";
import { Spinner } from "@chakra-ui/react";
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
export default function Spinners() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={variants}
      className="min__height"
    >
      <Container
        mt={"20px"}
        maxW={"8xl"}
        alignItems={"center"}
        className="display_flex_center"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Container>
    </motion.div>
  );
}
