import { ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { ArrowButton } from "../button";
import { SiTypescript, SiPython, SiJavascript } from "react-icons/si";

interface iProfission {
  number: 1 | 2 | 3;
}

export const Profission = ({ number }: iProfission) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <ArrowButton type="prev" />
      <Stack>
        <div className="introduct">
          <Typography
            fontSize={100}
            fontWeight={1000}
            className="introductText"
          >
            {number === 1 ? "FullStack" : number === 2 ? "FrontEnd" : "BackEnd"}
          </Typography>
          <Typography
            className="introductText"
            fontSize={30}
            fontWeight={1000}
            sx={{
              position: "relative",
              bottom: 35,
            }}
          >
            Developer
          </Typography>
        </div>
        <ImageList
          sx={{
            display: "flex",
            width: 280,
            position: "relative",
            bottom: 45,
          }}
          cols={1}
          className="icons_List"
        >
          <ImageListItem sx={{ width: 60 }}>
            <SiJavascript className="icons" />
          </ImageListItem>
          <ImageListItem sx={{ width: 60 }}>
            <SiTypescript className="icons" />
          </ImageListItem>
          <ImageListItem sx={{ width: 60 }}>
            <SiPython className="icons" />
          </ImageListItem>
        </ImageList>
      </Stack>
      <ArrowButton type="next"></ArrowButton>
    </Stack>
  );
};
