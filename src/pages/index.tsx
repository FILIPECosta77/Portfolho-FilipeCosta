import { Box, Flex, Text, Heading, Image, Stack } from "@chakra-ui/react";
import Head from "next/head";
import MyButton from "@/components/Button";
import { pictures } from "@/files/pictures";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Box
      w={"100%"}
      h={"100vh"}
      backgroundColor={"brand.1"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Head>
        <title>Filipe Costa</title>
      </Head>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
      >
        <Box display={"flex"}>
          <Flex direction={"column"} alignItems={"center"} w={900}>
            <Heading fontSize={"6xl"} color={"brand.2"}>
              {"<Desenvolvedor FullStack />"}
            </Heading>
            <Text
              fontSize={"4xl"}
              fontWeight={700}
              fontStyle={"italic"}
              textDecoration={"underline"}
              color={"brand.3"}
              w={"100%"}
              pl={550}
            >
              Filipe Costa
            </Text>
          </Flex>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          w={"100%"}
        >
          <Text fontSize={"3xl"} fontWeight={700} color={"brand.2"} w={"75%"}>
            Olá! Sou um especialista em codificação e programação
          </Text>
          <Text fontSize={"3xl"} fontWeight={700} color={"brand.2"} w={"75%"}>
            Tenho 19 anos, e 3 meses de experiência como Dev Freelancer.
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
          h={"32vh"}
        >
          <Heading fontSize={"3xl"} color={"brand.2"}>
            Ver Projetos
          </Heading>
          <Stack direction={"row"} spacing={"100px"}>
            <MyButton
              text="<FrontEnd/>"
              click={() => router.push("/techs/FrontEnd")}
            />
            <MyButton text="<FullStack/>" click={() => router.push("/techs")} />
            <MyButton
              text="<BackEnd/>"
              click={() => router.push("/techs/BackEnd")}
            />
          </Stack>
        </Box>
      </Box>
      <Image
        alt="Profile"
        w={"100%"}
        src={pictures.profile}
        overflow={"auto"}
      />
    </Box>
  );
}
