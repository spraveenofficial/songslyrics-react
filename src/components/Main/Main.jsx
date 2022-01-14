import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import "../../index.css";
import Card from "../GenreCard/Card";
const Main = () => {
  return (
    <Container maxW={"7xl"} bg="red">
      <div className="flexing">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <Flex flex="auto">
      </Flex> */}
    </Container>
  );
};

export default Main;
