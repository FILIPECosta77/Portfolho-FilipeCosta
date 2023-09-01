import { iProjectDataBack } from "@/images/pictures";
import { Box, Text, Stack, Tag } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CardProjectBack = ({ PDesc, PImg, PName }: iProjectDataBack) => {
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
          <Box mr={100}>
            <Image
              src={PImg}
              alt="Imagem De Códido De Programação"
              width={160}
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
        <Stack alignItems={"flex-end"}>
          <Tag>BackEnd</Tag>
        </Stack>
      </Box>
    </Box>
  );
};

export default CardProjectBack;
