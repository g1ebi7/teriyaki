import { useTranslation } from "react-i18next";

import styles from "./Solutions.module.scss";
import Block from "./Block";
import SwiperBlock from "./SwiperBlock/SwiperBlock";
import PlayBlock from "./PlayBlock";

import { Title } from "@/ui/Title/Title";
import Container from "@/ui/Container/Container";
import manIcon from "@/assets/images/man.svg";
import Section from "@/ui/Section";

const Solutions = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gray-500 py-12 overflow-hidden">
      <Container className="flex justify-between items-center">
        <Title className="mb-12 max-w-3xl">{t("sol-uni")}</Title>
        <div className={styles.gWrap}>
          <div className={styles.wrap}>
            <Block color="#6A5CE5" title={t("sol-uni")} image={manIcon} />
            <SwiperBlock />
            <Block color="#262626" title={t("sol-suc")} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
export default Solutions;
