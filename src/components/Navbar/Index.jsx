import React from "react";
import { useColorMode, useMediaQuery } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Logo } from "@choc-ui/logo";

export default function Gslr() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const [isMobile] = useMediaQuery("(min-width: 780px)");
  const [isTablet] = useMediaQuery("(min-width: 800px)");
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={!isMobile ? { base: 2, sm: 4 } : { base: 2, sm: 20 }, !isTablet? { base: 2, sm: 4 }: { base: 2, sm: 20 }}
        py={3}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.p
              cursor="pointer"
              onClick={() => navigate("/")}
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Logo />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.p>
            <chakra.h1
              cursor="pointer"
              onClick={() => navigate("/")}
              fontSize="xl"
              fontWeight="medium"
              ml="2"
            >
              SongsLyrics
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">Hindi</Button>
              <Button variant="ghost">English</Button>
              <Button variant="ghost">Tamil</Button>
              <Button variant="ghost">Kannada</Button>
              <Button
                alignContent={"center"}
                alignItems={"center"}
                onClick={() => toggleColorMode()}
                // variant="ghost"
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </HStack>
            <Button
              marginRight={"25"}
              // colorScheme="brand"
              onClick={() => toggleColorMode()}
              display={{ base: "block", md: "none" }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              onClick={() => navigate("/request")}
              colorScheme="brand"
              size="sm"
              rightIcon={<AddIcon />}
            >
              Request Lyrics
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                zIndex="100"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Hindi
                </Button>
                <Button w="full" variant="ghost">
                  English
                </Button>
                <Button w="full" variant="ghost">
                  Tamil
                </Button>
                <Button w="full" variant="ghost">
                  Kannada
                </Button>
                <Button w="full" variant="ghost">
                  Bengali
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
