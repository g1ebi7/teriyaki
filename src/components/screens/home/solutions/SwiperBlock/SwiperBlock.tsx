import cl from "classnames";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import styles from "../Solutions.module.scss";

import CustomSwiper from "@/ui/CustomSwiper/CustomSwiper";
import linkIcon from "@/assets/images/link2.svg";

const SwiperBlock = () => {
  const { t } = useTranslation();

  return (
    <CustomSwiper className={cl(styles.block, "bg-pinky justify-center")}>
      <SwiperSlide>
        <h2 className={styles.sTitle}>{t("sol-text2")}</h2>
      </SwiperSlide>
      <SwiperSlide>
        <h2 className={styles.sTitle}>{t("sol-text1")}</h2>
      </SwiperSlide>
    </CustomSwiper>
  );
};
export default SwiperBlock;
