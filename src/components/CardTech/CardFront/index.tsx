import RedirectButton from "@/components/Button/RedirectButton";
import { iProjectData } from "@/images/pictures";
import { Box, Text, Stack, Tag } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CardProjectFront = ({
  PName,
  PDesc,
  PImg1,
  PImg2,
  TechName,
  link,
}: iProjectData) => {
  const redirect = () => {
    var win = window.open(link, "_blank");
    win!.focus();
  };

  return (
    <Box
      border={"4px"}
      borderRadius={"8px"}
      borderColor={"brand.2"}
      p={4}
      width={"700px"}
      display={"flex"}
      gap={10}
    >
      <Box h={170}>
        <Text fontSize={"2xl"} fontWeight={600} ml={6}>
          {PName}
        </Text>
        <Stack spacing={"1px"} direction={"row"} alignItems={"center"}>
          <Box>
            <Image src={PImg1} alt="Imagem do site para Pc" width={160} />
          </Box>
          <Box>
            <Image
              src={PImg2 || ""}
              alt="Imagem do site para Mobile"
              width={100}
            />
          </Box>
        </Stack>
      </Box>
      <Box
        w={"50%"}
        textAlign={"start"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Text fontWeight={400}>{PDesc}</Text>
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

export default CardProjectFront;
