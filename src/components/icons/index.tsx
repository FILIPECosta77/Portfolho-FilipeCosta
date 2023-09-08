import React from "react";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Icon } from "@chakra-ui/react";

interface iLink {
  name: string;
  link: string;
}

interface iColorProps {
  color: "brand.1" | "brand.2" | "brand.3";
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

const Icons = ({ color }: iColorProps) => {
  const redirect = (link: string) => {
    var win = window.open(link, "_blank");
    win!.focus();
  };

  return (
    <>
      <Icon
        as={HiOutlineDocumentText}
        color={color}
        boxSize={8}
        cursor={"pointer"}
        onClick={() => redirect(links[0].link)}
      />
      <Icon
        as={TbBrandGithub}
        color={color}
        boxSize={8}
        cursor={"pointer"}
        onClick={() => redirect(links[1].link)}
      />
      <Icon
        as={TbBrandLinkedin}
        color={color}
        boxSize={8}
        cursor={"pointer"}
        onClick={() => redirect(links[2].link)}
      />
    </>
  );
};

export default Icons;
