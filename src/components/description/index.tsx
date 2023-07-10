import { Stack, Typography } from "@mui/material";
import React from "react";
import { SocialButtons } from "../button";

export const Description = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
    >
      <Typography
        className="reviewText"
        fontSize={30}
        fontWeight={600}
        sx={{ WebkitTextStroke: "0.5px #000" }}
      >
        Olá, Me Chamo Filipe
      </Typography>

      <Typography
        className="reviewText"
        fontSize={18}
        fontWeight={600}
        sx={{ WebkitTextStroke: "0.5px #000", width: "70%" }}
      >
        TENHO 19 ANOS E SOU DESENVOLVEDOR FRONTEND COM 2 MESES DE EXPERIÊNCIA
        TRABALHANDO COMO FREELANCER
      </Typography>
      <SocialButtons />
    </Stack>
  );
};
