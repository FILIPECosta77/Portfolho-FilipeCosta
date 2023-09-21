import { iProjectData } from "@/images/pictures";
import { Box, Text, Stack, Tag } from "@chakra-ui/react";
import RedirectButton from "@/components/Button/RedirectButton";
import Image from "next/image";
import React from "react";
import { myContext } from "@/context";
import { useContext } from "react";

const CardProjectBack = ({
  PDesc,
  PImg1,
  PName,
  TechName,
  link,
}: iProjectData) => {
  const redirect = () => {
    var win = window.open(link, "_blank");
    win!.focus();
  };
  const { largerThan1200, largerThan900, largerThan700, largerThan400 } =
    useContext(myContext);

  return (
    <Box
      border={"4px"}
      borderRadius={"8px"}
      borderColor={"brand.2"}
      p={4}
      width={largerThan1200 ? "700px" : "100%"}
      display={"flex"}
      gap={10}
      flexDirection={largerThan900 ? "row" : "column"}
      alignItems={largerThan900 ? "none" : "center"}
      justifyContent={"space-around"}
    >
      <Box
        h={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text fontSize={"2xl"} fontWeight={600}>
          {PName}
        </Text>
        <Stack spacing={"1px"} direction={"row"} alignItems={"center"}>
          <Box>
            <Image
              src={PImg1}
              alt="Imagem De Códido De Programação"
              width={160}
            />
          </Box>
        </Stack>
      </Box>
      <Box
        w={largerThan1200 ? "50%" : "100%"}
        textAlign={"start"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        gap={largerThan700 ? 4 : largerThan900 ? 0 : 8}
      >
        <Text overflow={largerThan1200 ? "unset" : "auto"} fontWeight={400}>
          {PDesc}
        </Text>
        <Stack
          alignItems={"flex-end"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <RedirectButton click={redirect} />
          <Tag backgroundColor={"brand.3"} color={"brand.1"}>
            {TechName}
          </Tag>
        </Stack>
      </Box>
    </Box>
  );
};

export default CardProjectBack;
