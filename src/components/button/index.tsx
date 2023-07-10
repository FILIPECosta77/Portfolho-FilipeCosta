import IconButton from "@mui/material/Button";
import React from "react";
import NavigateNext from "@mui/icons-material/NavigateNext";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import Stack from "@mui/material/Stack";
import { CgFileDocument } from "react-icons/cg";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface iType {
  type: "next" | "prev";
}

export const ArrowButton = ({ type }: iType) => {
  return (
    <IconButton sx={{ backdropFilter: "trasparent" }}>
      {type == "next" ? (
        <NavigateNext color="secondary" sx={{ fontSize: 100 }} />
      ) : (
        <NavigateBefore color="secondary" sx={{ fontSize: 100 }} />
      )}
    </IconButton>
  );
};

export const SocialButtons = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      width={"100%"}
    >
      <IconButton
        sx={{
          height: 50,
        }}
      >
        <CgFileDocument className="buttonIcon" />
      </IconButton>
      <IconButton
        sx={{
          height: 50,
        }}
      >
        <SiLinkedin className="buttonIcon" />
      </IconButton>
      <IconButton
        sx={{
          height: 50,
        }}
      >
        <SiGithub className="buttonIcon" />
      </IconButton>
    </Stack>
  );
};
