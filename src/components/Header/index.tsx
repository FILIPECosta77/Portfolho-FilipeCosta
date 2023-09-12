import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { pictures } from "@/images/pictures";
import { useRouter } from "next/router";

interface iProps {
  children: React.ReactNode;
}

const Header = ({ children }: iProps) => {
  const router = useRouter();

  return (
    <Box
      w={"100%"}
      h={50}
      backgroundColor={"brand.2"}
      borderBottom={"4px"}
      borderColor={"brand.3"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pl={10}
      pr={10}
    >
      <Icon
        as={AiFillHome}
        boxSize={8}
        color={"brand.1"}
        cursor={"pointer"}
        onClick={() => router.replace("/")}
      />
      <Text color={"brand.1"} fontSize={"2xl"} fontWeight={700}>
        {`<${children}/>`}
      </Text>
      <Image alt="Profile" src={pictures.profile} className="profileSX" />
    </Box>
  );
};

export default Header;
