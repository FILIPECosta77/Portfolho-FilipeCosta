import React from "react";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Icon } from "@chakra-ui/react";

const Icons = () => {
  return (
    <>
      <Icon
        as={HiOutlineDocumentText}
        color={"brand.1"}
        boxSize={8}
        cursor={"pointer"}
      />
      <Icon
        as={TbBrandGithub}
        color={"brand.1"}
        boxSize={8}
        cursor={"pointer"}
      />
      <Icon
        as={TbBrandLinkedin}
        color={"brand.1"}
        boxSize={8}
        cursor={"pointer"}
      />
    </>
  );
};

export default Icons;
