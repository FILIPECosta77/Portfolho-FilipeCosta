import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { Box } from "@chakra-ui/react";
import LongDesc from "@/components/DescBox";
import CardProjectFront from "@/components/CardTech/CardFront";
import { ProjectsData } from "@/images/pictures";
import Container from "@/components/container";
import CardProjectBack from "@/components/CardTech/CardBack";
import Footer from "@/components/Footer";

const Techs = () => {
  const router = useRouter();
  const { techs } = router.query;

  return (
    <Box>
      <Header>{techs}</Header>
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
            {ProjectsData.map((project, index) => {
              if (
                techs === "frontend" &&
                project.TechName.toLowerCase() === "frontend"
              ) {
                return (
                  <CardProjectFront
                    key={index}
                    TechName={project.TechName}
                    PName={project.PName}
                    PDesc={project.PDesc}
                    PImg1={project.PImg1}
                    PImg2={project.PImg2}
                    link={project.link}
                  />
                );
              }
              if (
                techs === "backend" &&
                project.TechName.toLowerCase() === "backend"
              ) {
                return (
                  <CardProjectBack
                    key={index}
                    TechName={project.TechName}
                    PDesc={project.PDesc}
                    PName={project.PName}
                    PImg1={project.PImg1}
                    link={project.link}
                  />
                );
              }
            })}
          </Box>
        </Container>
        <LongDesc />
      </Box>
      <Footer />
    </Box>
  );
};

export default Techs;
