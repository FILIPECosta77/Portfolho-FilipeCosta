import { Box } from "@chakra-ui/react";
import React from "react";

interface iProps {
  children: React.ReactElement;
}

const Container = ({ children }: iProps) => {
  return (
    <Box w={"100%"} ml={"60px"} mr={"60px"} mt={"30px"} mb={"30px "}>
      {children}
    </Box>
  );
};

export default Container;
