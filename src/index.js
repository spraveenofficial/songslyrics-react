import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fontsource/poppins";
// import theme from './theme'
import {
  ChakraProvider,
  extendTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819",
  },
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  ...chakraTheme.fonts,
  colors,
  config,
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800,
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  rootElement
);
