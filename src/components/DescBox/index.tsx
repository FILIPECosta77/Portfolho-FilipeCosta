import { Box, Text } from "@chakra-ui/react";
import React from "react";

const LongDesc = () => {
  return (
    <Box w={400} h={"100vh"} ml={10} backgroundColor={"brand.2"} p={4}>
      <Text
        color={"brand.1"}
        fontSize={"4xs"}
        fontWeight={600}
        letterSpacing={1.2}
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