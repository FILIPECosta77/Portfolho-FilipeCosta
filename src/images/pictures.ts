import celular1 from "./celular1.png";
import celular2 from "./celular2.png";
import pc1 from "./pc1.png";
import pc2 from "./pc2.png";
import pc3 from "./pc3.png";
import profile from "./IMG_20230910_182934.jpg";
import { StaticImageData } from "next/image";

interface iPics {
  profile: StaticImageData;
}

export interface iProjectData {
  TechName: "FrontEnd" | "BackEnd";
  PName: string;
  PDesc: string;
  PImg1: StaticImageData;
  PImg2?: StaticImageData;
  link: string;
}

export const pictures: iPics = {
  profile: profile,
};

export const ProjectsData: iProjectData[] = [
  {
    TechName: "FrontEnd",
    PName: "AstroVerso",
    PDesc:
      "Site que convem deixar o estudo sobre astronomia divertido e pratico para que qualquer pessoa possa se divertir enquanto aprende",
    PImg1: pc1,
    PImg2: celular1,
    link: "https://github.com/FILIPECosta77/astroverso",
  },
  {
    TechName: "FrontEnd",
    PName: "MotorsShop",
    PDesc:
      "Site Completo de venda de carros onde o cliente pode anunciar seus carros e comprar carros, contem aba de perfil do usuario e filtro de pesquisa avançado",
    PImg1: pc2,
    PImg2: celular2,
    link: "https://github.com/FILIPECosta77/FrontEnd-FullStackM6",
  },
  {
    TechName: "BackEnd",
    PName: "E-Commerce API",
    PDesc: "API Completa de um E-commerce construida em python, Django e MySql",
    PImg1: pc3,
    link: "https://github.com/FILIPECosta77/E-commerce-BackEnd",
  },
  {
    TechName: "BackEnd",
    PName: "API MotorsShop",
    PDesc:
      "API Do Projeto FullStack MotorsSHop construida em Node ultilizando Prisma, e PostgresSql",
    PImg1: pc3,
    link: "https://github.com/FILIPECosta77/BackEnd-FullStackM6",
  },
];
