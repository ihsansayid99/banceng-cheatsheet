import { Box, Container } from "@chakra-ui/react";
import React from "react";

interface ILayoutContainer {
  children: React.ReactNode;
  //   section: string;
  title: string;
}

const LayoutContainer: React.FC<ILayoutContainer> = ({ children }) => {
  return (
    <>
      <Box bg="brand.light" minH="100vh" overflow={'auto'}>
        <Container px={'2.5rem'} py={'1rem'} maxW={'full'}>{children}</Container>
      </Box>
    </>
  );
};

export default LayoutContainer;
