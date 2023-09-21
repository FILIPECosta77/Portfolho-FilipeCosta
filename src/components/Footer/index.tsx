import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { myContext } from "@/context";
import { useContext } from "react";

const Footer = () => {
  const { largerThan1200, largerThan900, largerThan700, largerThan400 } =
    useContext(myContext);
  return (
    <Box
      w={"100%"}
      h={largerThan400 ? 28 : largerThan700 ? 32 : largerThan1200 ? 40 : 24}
      backgroundColor={"brand.2"}
      display={"fflex"}
      alignItems={"center"}
      justifyContent={"center"}
      borderTop={"4px"}
      borderColor={"brand.3"}
    >
      <Text
        textAlign={"center"}
        p={4}
        color={"brand.1"}
        fontWeight={600}
        fontSize={
          largerThan400 ? 18 : largerThan700 ? 22 : largerThan1200 ? 26 : 16
        }
      >
        © Copyright Filipe Costa 2023 - Todos os direitos reservados
      </Text>
    </Box>
  );
};

export default Footer;
