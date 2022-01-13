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
import Card from "../GenreCard/Card";
const Main = () => {
  return (
    <Container maxW={"7xl"}>
      <Flex flex="auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </Container>
  );
};

export default Main;
