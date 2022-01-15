import { Stack, useColorModeValue, Text, Button } from "@chakra-ui/react";
import "./Cookie.module.css";

export default function Cookie() {
  return (
    <Stack
      zIndex={"100"}
      position={"fixed"}
      bottom={"0"}
      p="5"
      boxShadow="lg"
      className="cookie__box"
      color={"white"}
      width={"100%"}
      bg={useColorModeValue("gray.800", "inherit")}
    >
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Your Privacy</Text>
        {/* <FcLock /> */}
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
          We use cookies and similar technologies to help personalise content,
          tailor and measure ads, and provide a better experience. By clicking
          OK or turning an option on in Cookie Preferences, you agree to this,
          as outlined in our Cookie Policy. To change preferences or withdraw
          consent, please update your Cookie Preferences.
        </Text>
        <Stack direction={{ base: "column", md: "row" }}>
          <Button variant="outline" colorScheme="green">
            Cookie Preferences
          </Button>
          <Button colorScheme="green">OK</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
