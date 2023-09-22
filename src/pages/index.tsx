import { Box, Flex, Text, Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";
import MyButton from "@/components/Button/Button";
import Image from "next/image";
import { pictures } from "@/images/pictures";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Icons from "@/components/icons";
import { myContext } from "@/context";
import { useContext } from "react";

export default function Home() {
  const router = useRouter();
  const {
    largerThan1200,
    largerThan900,
    largerThan700,
    largerThan400,
    biggestThan750,
  } = useContext(myContext);

  return (
    <>
      <Head>
        <title>Filipe Costa</title>
      </Head>
      <Box
        w={"100%"}
        h={"100%"}
        backgroundColor={"brand.1"}
        display={"flex"}
        flexDirection={largerThan1200 ? "row" : "column-reverse"}
        justifyContent={"flex-end"}
        gap={
          largerThan1200
            ? 12
            : largerThan900
            ? 8
            : largerThan700
            ? 6
            : largerThan400
            ? 4
            : 0
        }
        // h={biggestThan750 ? "90vh" : ""}
      >
        <Box
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          gap={
            largerThan1200
              ? 0
              : largerThan900
              ? 8
              : largerThan700
              ? 10
              : largerThan400
              ? 12
              : 6
          }
        >
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Flex
              direction={"column"}
              alignItems={"center"}
              w={largerThan1200 ? "100%" : 900}
            >
              <Heading
                p={4}
                fontSize={
                  largerThan400
                    ? "4xl"
                    : largerThan700
                    ? "5xl"
                    : largerThan1200
                    ? "6xl"
                    : "3xl"
                }
                color={"brand.2"}
                textAlign={largerThan900 ? "unset" : "center"}
              >
                {"<Desenvolvedor FullStack />"}
              </Heading>
              <Box
                display={"flex"}
                flexDirection={largerThan900 ? "row" : "column-reverse"}
                alignItems={"center"}
                gap={4}
                pl={largerThan900 ? 90 : 0}
              >
                <Icons color="brand.3" hoverColor="black" />
                <Text
                  fontSize={
                    largerThan400
                      ? "3xl"
                      : largerThan700
                      ? "4xl"
                      : largerThan1200
                      ? "5xl"
                      : "2xl"
                  }
                  fontWeight={700}
                  fontStyle={"italic"}
                  textDecoration={"underline"}
                  color={"brand.3"}
                  w={"100%"}
                >
                  Filipe Costa
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            w={"100%"}
          >
            <Text
              fontSize={
                largerThan400
                  ? "30px"
                  : largerThan700
                  ? "38px"
                  : largerThan1200
                  ? "44px"
                  : "26px"
              }
              fontWeight={700}
              color={"brand.2"}
              w={"75%"}
            >
              Olá! Sou um especialista em codificação e programação
            </Text>
            <Text
              fontSize={
                largerThan400
                  ? "30px"
                  : largerThan700
                  ? "38px"
                  : largerThan1200
                  ? "44px"
                  : "26px"
              }
              fontWeight={700}
              color={"brand.2"}
              w={"75%"}
            >
              Tenho 19 anos, e estou em busca da minha primeira oportunidade de
              emprego
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
            gap={8}
            w={"100%"}
          >
            <Heading
              fontSize={
                largerThan400
                  ? "4xl"
                  : largerThan700
                  ? "5xl"
                  : largerThan1200
                  ? "6xl"
                  : "3xl"
              }
              color={"brand.2"}
            >
              Ver Projetos
            </Heading>
            <Stack
              direction={largerThan900 ? "row" : "column"}
              spacing={largerThan900 ? "100px" : "16px"}
              p={4}
            >
              <MyButton
                text="<FrontEnd/>"
                click={() => router.push("/techs/frontend")}
              />
              <MyButton
                text="<FullStack/>"
                click={() => router.push("/techs")}
              />
              <MyButton
                text="<BackEnd/>"
                click={() => router.push("/techs/backend")}
              />
            </Stack>
          </Box>
        </Box>
        <Box
          width={largerThan1200 ? "60%" : "100%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Image
            className="profileImage"
            src={pictures.profile}
            alt="Foto Filipe Costa"
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
