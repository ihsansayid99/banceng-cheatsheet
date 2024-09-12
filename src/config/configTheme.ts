import { extendTheme } from "@chakra-ui/react";
import { colors } from './theme/colors'
import { Button, config } from "./theme";
import '@fontsource-variable/josefin-sans'

type CustomColors = typeof colors;

const theme = extendTheme({
    colors: { ...colors },
    fonts: {
      heading: "'Josefin Sans Variable', sans-serif",
      body: "'Josefin Sans Variable', sans-serif",
    },
    components: {
      Button,
    },
    config,
  });
  type CustomTheme = typeof theme & CustomColors;
  
  export type { CustomTheme };
  export { theme };