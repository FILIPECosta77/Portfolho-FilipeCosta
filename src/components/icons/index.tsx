import React from "react";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Box, Flex, Icon } from "@chakra-ui/react";

interface iLink {
  name: string;
  link: string;
}

interface iColorProps {
  color: "brand.1" | "brand.2" | "brand.3";
  hoverColor: "black" | "white";
}

const links: iLink[] = [
  {
    name: "Curriculo",
    link: "https://docs.google.com/document/d/1NZh8Zc-7G9zLzBJ8ctwwPhKUqu1u4s7ugUDzcNQIEbk/edit?usp=sharing",
  },
  {
    name: "GitHub",
    link: "https://github.com/FILIPECosta77",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/filipecostasil/",
  },
];

const Icons = ({ color, hoverColor }: iColorProps) => {
  const redirect = (link: string) => {
    var win = window.open(link, "_blank");
    win!.focus();
  };

  const setHoverColor = () => {
    return hoverColor === "white"
      ? "rgba(250,250,250, 0.3)"
      : "rgba(0, 0, 0, 0.3)";
  };

  return (
    <Box display={"flex"} gap={12}>
      <Icon
        as={HiOutlineDocumentText}
        color={color}
        boxSize={8}
        cursor={"pointer"}
        onClick={() => redirect(links[0].link)}
        _hover={{
          backgroundColor: setHoverColor(),
          transition: "0.6s",
        }}
        borderRadius={"50px"}
        p={"2px"}
      />
      <Icon
        as={TbBrandGithub}
        color={color}
        boxSize={8}
        cursor={"pointer"}
        onClick={() => redirect(links[1].link)}
        _hover={{
          backgroundColor: setHoverColor(),
          transition: "0.6s",
        }}
        borderRadius={"50px"}
        p={"2px"}
      />
      <Icon
        as={TbBrandLinkedin}
        color={color}
        boxSize={8}
        cursor={"pointer"}
        onClick={() => redirect(links[2].link)}
        _hover={{
          backgroundColor: setHoverColor(),
          transition: "0.6s",
        }}
        borderRadius={"50px"}
        p={"2px"}
      />
    </Box>
  );
};

export default Icons;
