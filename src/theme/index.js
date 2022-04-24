import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#121212")(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: () => ({
      textUnderlineOffset: 3,
    }),
  },
  Modal: {
    baseStyle: {
      dialog: {
        maxHeight: "calc(100vh - 50px)",
        overflowY: "auto",
      }
    }
  }
};

const fonts = {
  heading: "Roboto Mono",
  body: "Roboto Mono",
};

const theme = extendTheme({ config, styles, fonts, components });
export default theme;
