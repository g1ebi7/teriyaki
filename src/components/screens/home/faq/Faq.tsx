import { useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./Faq.module.scss";
import Accordion from "./Accordion/Accordion";

import Container from "@/ui/Container/Container";
import Section from "@/ui/Section";
import { Title } from "@/ui/Title/Title";

const Faq = () => {
  const [currentId, setCurrentId] = useState(0);

  const handleClick = (id: number) => {
    if (currentId === id) {
      setCurrentId(0);
    } else {
      setCurrentId(id);
    }
  };

  const { t } = useTranslation();

  return (
    <Section>
      <Container
        className={cn("flex items-center justify-between", styles.cont)}
      >
        <div>
          <Title className="mb-10">{"FAQ"}</Title>
          <div className={styles.block}>
            <Accordion
              onClick={handleClick}
              currentId={currentId}
              id={1}
              title={t("ac-1")}
              content={t("ac-1-t")}
            />
            <Accordion
              onClick={handleClick}
              currentId={currentId}
              id={2}
              title={t("ac-2")}
              content={t("ac-2-t")}
            />
            <Accordion
              onClick={handleClick}
              currentId={currentId}
              id={3}
              title={t("ac-3")}
              content={t("ac-3-t")}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
