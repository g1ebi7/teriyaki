import { SwiperSlide } from "swiper/react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "./About.module.scss";

import Section from "@/ui/Section";
import Container from "@/ui/Container/Container";
import { Title } from "@/ui/Title/Title";
import CustomSwiper from "@/ui/CustomSwiper/CustomSwiper";
import graphic from "@/assets/images/graphic.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <Section className={styles.section}>
      <Container className={cn("flex justify-center", styles.cont)}>
        <div className="flex flex-col">
          <div className={styles.swiperCont}>
            <CustomSwiper className="max-w-3xl">
              <SwiperSlide className="mb-12">
                <div className="flex justify-center mb-6">
                  <h1 className={cn("text-5xl font-normal", styles.title)}>
                    {t("about-1")}
                  </h1>
                </div>
                <p className={styles.text}>{t("about-1-t")}</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center mb-6">
                  <h1 className={cn("text-5xl font-normal", styles.title)}>
                    {t("about-2")}
                  </h1>
                </div>
                <p className={styles.text}>{t("about-2-t")}</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center mb-6">
                  <h1 className={cn("text-5xl font-normal", styles.title)}>
                    {t("about-3")}
                  </h1>
                </div>
                <p className={styles.text}>{t("about-3-t")}</p>
              </SwiperSlide>
            </CustomSwiper>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
