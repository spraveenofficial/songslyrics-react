import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" py={40} px={6}>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="28px" fontWeight={"bold"} mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        onClick={() => navigate("/")}
        variant="solid"
      >
        Go to Home
      </Button>
    </Box>
  );
}
