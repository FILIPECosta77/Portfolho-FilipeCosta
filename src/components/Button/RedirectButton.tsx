import React from "react";
import { Button } from "@chakra-ui/react";

interface iText {
  click?: () => void;
}

const RedirectButton = ({ click }: iText) => {
  return (
    <Button
      onClick={click}
      variant={"outline"}
      size={"md"}
      borderColor={"brand.1"}
      backgroundColor={"brand.2"}
      color={"brand.1"}
      _hover={{
        boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.25)",
        transition: "0.6s",
      }}
    >
      Ver Código
    </Button>
  );
};
export default RedirectButton;
