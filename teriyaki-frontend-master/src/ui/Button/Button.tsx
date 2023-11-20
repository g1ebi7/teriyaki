import cl from "classnames";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import styles from "./Button.module.scss";

interface IButton {
  className?: string;
  anim?: boolean;
  handleClick?: (e: any) => void;
  title?: string;
  payment?: boolean;
  loading?: boolean;
}

export const Button = forwardRef(
  (
    { className, handleClick, anim = false, title, payment, loading }: IButton,
    ref: any
  ) => {
    const { t } = useTranslation();

    return (
      <button
        ref={ref}
        onClick={handleClick}
        disabled={loading}
        className={cl(!anim ? styles.btn : styles.mBtn, className)}
      >
        {title ? title : t("btn")}
      </button>
    );
  }
);

Button.displayName = "Btn";

export const MButton = motion(Button);
