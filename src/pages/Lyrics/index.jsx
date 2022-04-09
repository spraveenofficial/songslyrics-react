import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import Search from "../Search/Search";

const Lyrics = () => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        templateColumns={{ base: "1fr", md: "2fr 1fr" }}
        spacingX="10"
        spacingy="10"
      >
        <Box padding={{ base: "0", md: "20px" }}>
          <h1>This is right</h1>
        </Box>
        <Box padding={{ base: "0", md: "20px" }}>
          <h1>Search Area</h1>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Lyrics;
