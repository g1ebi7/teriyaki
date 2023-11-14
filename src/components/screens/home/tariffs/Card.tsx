import { useTranslation } from "react-i18next";
import cl from "classnames";

import styles from "./Tariff.module.scss";
import { useTarrifPayments } from "./useTarrifPayments";

import { MButton } from "@/ui/Button/Button";
import { Svg } from "@/ui/Svg/Svg";

interface ICard {
  tarIndex: number;
  price: number;
}

const Card = ({ tarIndex, price }: ICard) => {
  const { t } = useTranslation();
  const { handlePayment } = useTarrifPayments(tarIndex);

  return (
    <div className={styles.card}>
      <div>
        <h2>{t(`tar${tarIndex}-1`)}</h2>
      </div>
      <div>
        <ul className={styles.list}>
          <li>{t(`tar${tarIndex}-2`)}</li>
          <li>{t(`tar${tarIndex}-3`)}</li>
          <li>{t(`tar${tarIndex}-4`)}</li>
          <li>{t(`tar${tarIndex}-5`)}</li>
          <li>{t(`tar${tarIndex}-6`)}</li>
        </ul>
        <span className={cl(styles.price, "z-50")}>{`$${price}.00`}</span>
        <MButton
          handleClick={handlePayment}
          className="mb-16"
          anim
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 17 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { type: "spring", stiffness: 400, damping: 17 },
          }}
        />
        {tarIndex < 3 && <span className={styles.note}>{t("note")}</span>}
      </div>
    </div>
  );
};

export default Card;
