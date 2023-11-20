import { useTranslation } from "react-i18next";

import styles from "./Header.module.scss";

import Container from "@/ui/Container/Container";
import { Button } from "@/ui/Button/Button";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Container className="flex items-center">
        <div className={styles.text}>
          <span>{t("offer")}</span>
        </div>
        <Button />
      </Container>
    </header>
  );
};
export default Header;
