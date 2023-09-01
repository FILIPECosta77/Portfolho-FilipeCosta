import React from "react";
import Header from "../../components/Header";
import { Box } from "@chakra-ui/react";
import LongDesc from "@/components/DescBox";
import CardProjectFront from "@/components/CardTech/CardFront";
import {
  ProjectsDataBack,
  ProjectsDataFront as ProjectsFront,
} from "@/images/pictures";
import Container from "@/components/container";
import CardProjectBack from "@/components/CardTech/CardBack";

const Techs = () => {
  return (
    <Box>
      <Header>FullStack</Header>
      <Box
        w={"100%"}
        backgroundColor={"brand.1"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Container>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={4}
          >
            {ProjectsFront.map((project, index) => {
              return (
                <CardProjectFront
                  key={index}
                  PName={project.PName}
                  PDesc={project.PDesc}
                  PImg1={project.PImg1}
                  PImg2={project.PImg2}
                />
              );
            })}
            {ProjectsDataBack.map((project, index) => {
              return (
                <CardProjectBack
                  key={index}
                  PDesc={project.PDesc}
                  PName={project.PName}
                  PImg={project.PImg}
                />
              );
            })}
          </Box>
        </Container>
        <LongDesc />
      </Box>
    </Box>
  );
};

export default Techs;
