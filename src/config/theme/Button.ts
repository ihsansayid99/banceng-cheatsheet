import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  defaultProps: {
    size: "none",
  },
  baseStyle: {
    // Button Config
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
  },
  variants: {
    primary: {
      bg: "#6C4E31",
      color: "white",
      px: '1.3rem',
      py: '0.7rem',
      _disabled: {
        bg: "#EBEBEB",
        color: "black",
        borderColor: "#D9D9D9",
        border: "1px solid",
      },
      _hover: {
        bg: "#603F26",
      },
      _active: {
        bg: "#603F26",
      },
    },
  },
  sizes: {
    small: {
      h: "24px",
      px: "8px",
    },
  },
};

export default Button;
