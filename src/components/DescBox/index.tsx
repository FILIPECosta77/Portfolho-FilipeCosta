import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Icons from "../icons";
import { myContext } from "@/context";
import { useContext } from "react";

const LongDesc = () => {
  const { largerThan1200, largerThan700, textModal } = useContext(myContext);

  return (
    <Box
      w={!largerThan700 && textModal ? "100%" : 612}
      backgroundColor={"brand.2"}
      p={4}
      display={!largerThan700 && !textModal ? "none" : "flex"}
      flexDirection={"column"}
      position={!largerThan700 && textModal ? "absolute" : "unset"}
      gap={12}
      h={!largerThan700 && textModal ? "100%" : ""}
      transition={"1.3s"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        flexDirection={largerThan1200 ? "row" : "column"}
        alignItems={"center"}
        w={"100%"}
      >
        <Heading fontSize={"3xl"} color={"brand.1"} m={4}>
          Filipe Costa
        </Heading>
        <Icons color="brand.1" hoverColor="white" />
      </Box>
      <Text
        color={"brand.1"}
        fontSize={"1.28rem"}
        fontWeight={400}
        letterSpacing={1.2}
        overflow={largerThan1200 ? "unset" : "auto"}
        w={"100%"}
      >
        Olá! Sou um especialista em codificação e programação. Tenho ampla
        experiência em várias linguagens de programação e estou familiarizado
        principalmente com a área de desenvolvimento web. Durante meus estudos,
        trabalhei em projetos desafiadores, onde tive a oportunidade de aplicar
        meus conhecimentos e habilidades técnicas para resolver problemas
        complexos. Tenho um forte domínio de algoritmos e estruturas de dados, o
        que me permite encontrar soluções eficientes e otimizadas. Além disso,
        sou apaixonado por compartilhar meu conhecimento com os outros e ajudar
        pessoas a aprenderem programação de forma prática e acessível. Acredito
        que a programação pode ser divertida e empoderadora para todos,
        independentemente do nível de experiência
      </Text>
    </Box>
  );
};

export default LongDesc;
