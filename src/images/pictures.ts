import celular1 from "./celular1.png";
import celular2 from "./celular2.png";
import pc1 from "./pc1.png";
import pc2 from "./pc2.png";
import pc3 from "./pc3.png";
import { StaticImageData } from "next/image";

interface iPics {
  profile: string;
}

export interface iProjectDataFront {
  PName: string;
  PDesc: string;
  PImg1: StaticImageData;
  PImg2: StaticImageData;
}
export interface iProjectDataBack {
  PName: string;
  PDesc: string;
  PImg: StaticImageData;
}

export const pictures: iPics = {
  profile:
    "https://e1.pxfuel.com/desktop-wallpaper/659/18/desktop-wallpaper-dr-stone-senku-x-chrome-dr-stone-mobile.jpg",
};

export const ProjectsDataFront: iProjectDataFront[] = [
  {
    PName: "AstroVerso",
    PDesc:
      "Site que convem deixar o estudo sobre astronomia divertido e pratico para que qualquer pessoa possa se divertir enquanto aprende",
    PImg1: pc1,
    PImg2: celular1,
  },
  {
    PName: "MotorsShop",
    PDesc:
      "Site Completo de venda de carros onde o cliente pode anunciar seus carros e comprar carros, contem aba de perfil do usuario e filtro de pesquisa avançado",
    PImg1: pc2,
    PImg2: celular2,
  },
];

export const ProjectsDataBack: iProjectDataBack[] = [
  {
    PName: "E-Commerce API",
    PDesc: "API Completa de um E-commerce construida em python, Django e MySql",
    PImg: pc3,
  },
  {
    PName: "API MotorsShop",
    PDesc:
      "API Do Projeto FullStack MotorsSHop construida em Node ultilizando Prisma, e PostgresSql",
    PImg: pc3,
  },
];
