import React from "react";
import Header from "../../components/Header";
import { Box, Text, Container } from "@chakra-ui/react";
import LongDesc from "@/components/DescBox";

const Techs = () => {
  return (
    <Box>
      <Header>FullStack</Header>
      <Box
        w={"100%"}
        backgroundColor={"brand.1"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Container />
        <LongDesc />
      </Box>
    </Box>
  );
};

export default Techs;
