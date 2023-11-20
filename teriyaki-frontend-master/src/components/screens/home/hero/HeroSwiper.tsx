import { SwiperSlide } from "swiper/react";

import styles from "./Hero.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HeroSwiperItem from "./HeroSwiperItem";
import { swiperData } from "./hero.data";

import CustomSwiper from "@/ui/CustomSwiper/CustomSwiper";

const HeroSwiper = () => {
  return (
    <CustomSwiper className={styles.swiper} scroll={false}>
      {swiperData.map(({ example }, index: number) => (
        <SwiperSlide key={index}>
          <HeroSwiperItem example={example} index={index + 1} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};
export default HeroSwiper;
