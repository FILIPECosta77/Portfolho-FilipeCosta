import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
  return (
    <Box w={"100vw"} h={"100vh"} backgroundColor={"brand.1"}>
      <Head>
        <title>Filipe Costa</title>
      </Head>
      <Text fontSize={"6xl"} fontWeight={700} color={"brand.2"}>
        Desenvolvedor FullStack
      </Text>
    </Box>
  );
};

export default Home;
