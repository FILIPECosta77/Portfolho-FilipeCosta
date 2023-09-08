import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      w={"100%"}
      h={16}
      backgroundColor={"brand.2"}
      display={"fflex"}
      alignItems={"center"}
      justifyContent={"center"}
      borderTop={"4px"}
      borderColor={"brand.3"}
    >
      <Text color={"brand.1"} fontWeight={600}>
        © Copyright Filipe Costa 2023 - Todos os direitos reservados
      </Text>
    </Box>
  );
};

export default Footer;
