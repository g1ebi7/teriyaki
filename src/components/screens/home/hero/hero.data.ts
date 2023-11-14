import { IHeroItem } from "./hero.interface";

import site1 from "@/assets/images/site1.png";
import author1 from "@/assets/images/author1.svg";
import kebab from "@/assets/images/kebab.png";
import barber from "@/assets/images/barber.png";
import clothes from "@/assets/images/clothes.png";
import portfolio from "@/assets/images/portfolio.png";

export const swiperData: Omit<IHeroItem, "index">[] = [
  {
    example: kebab,
  },
  {
    example: barber,
  },
  {
    example: clothes,
  },
  {
    example: portfolio,
  },
];
