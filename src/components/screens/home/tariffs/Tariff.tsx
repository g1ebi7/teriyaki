import { useTranslation } from "react-i18next";
import cl from "classnames";

import Card from "./Card";
import styles from "./Tariff.module.scss";

import Section from "@/ui/Section";
import Container from "@/ui/Container/Container";
import { Title } from "@/ui/Title/Title";

const tarriffsData = [{ price: 290 }, { price: 490 }];
const subData = [{ price: 23 }, { price: 35 }, { price: 50 }];

const Tariff = () => {
  const { t } = useTranslation();

  return (
    <Section className={styles.tariffs}>
      <Container className="flex flex-col items-center">
        <Title className={cl("mb-10", styles.title)}>{t("tar")}</Title>
        {tarriffsData.map((tariff, index) => (
          <Card tarIndex={index + 1} price={tariff.price} key={index} />
        ))}
        <Title className={cl("mb-10", styles.title)}>Subscriptions</Title>
        {subData.map((tariff, index) => (
          <Card tarIndex={index + 1} price={tariff.price} key={index} />
        ))}
      </Container>
    </Section>
  );
};

export default Tariff;
