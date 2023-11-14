import { useTranslation } from "react-i18next";

import Card from "./Card";

import Section from "@/ui/Section";
import Container from "@/ui/Container/Container";
import { Title } from "@/ui/Title/Title";

const tarriffsData = [
  { price: 290 },
  { price: 450 },
  { price: 23 },
  { price: 35 },
  { price: 50 },
];

const Tariff = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="flex flex-col items-center">
        <Title className="mb-10">{t("tar")}</Title>
        {tarriffsData.map((tariff, index) => (
          <Card tarIndex={index + 1} price={tariff.price} key={index} />
        ))}
      </Container>
    </Section>
  );
};

export default Tariff;
