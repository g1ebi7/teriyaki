import cn from "classnames";
import { useTranslation } from "react-i18next";

import HeroSwiper from "./HeroSwiper";
import styles from "./Hero.module.scss";

import { MTitle } from "@/ui/Title/Title";
import Container from "@/ui/Container/Container";
import { MButton } from "@/ui/Button/Button";
import Section from "@/ui/Section";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section className="mt-16">
      <Container className={cn("flex", styles.cont)}>
        <div className={cn(styles.wrapper, "flex flex-col mr-auto")}>
          <MTitle
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={cn("mb-16", styles.title)}
            hero
          >
            {t("hero")}
          </MTitle>
          <MButton
            anim
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            initial={{ x: -600 }}
            animate={{ x: 0, transition: { type: "spring", delay: 1 } }}
            className="self-start"
          />
        </div>
        <HeroSwiper />
      </Container>
    </Section>
  );
};
export default Hero;
