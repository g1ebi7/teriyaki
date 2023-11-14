import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./Clients.module.scss";
import ClientBlock from "./ClientBlock";

import Container from "@/ui/Container/Container";
import Section from "@/ui/Section";
import { Title } from "@/ui/Title/Title";

const Clients = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <div className="flex justify-center mb-16">
          <Title>{t("cl")}</Title>
        </div>
        <div
          className={cn(
            "flex justify-center items-center gap-14",
            styles.blocks
          )}
        >
          <ClientBlock title={t("cl-1")} />
          <ClientBlock title={t("cl-2")} green />
          <ClientBlock title={t("cl-3")} />
        </div>
      </Container>
    </Section>
  );
};

export default Clients;
