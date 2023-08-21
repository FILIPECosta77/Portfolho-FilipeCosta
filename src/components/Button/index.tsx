import React from "react";
import { Button } from "@chakra-ui/react";

interface iText {
  text: string;
  click?: () => void;
}

const MyButton = ({ text, click }: iText) => {
  return (
    <Button
      onClick={click}
      variant={"outline"}
      size={"lg"}
      borderColor={"brand.2"}
      color={"brand.2"}
      _hover={{
        backgroundColor: "brand.1",
        boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.25)",
        transition: "0.6s",
      }}
    >
      {text}
    </Button>
  );
};

export default MyButton;
