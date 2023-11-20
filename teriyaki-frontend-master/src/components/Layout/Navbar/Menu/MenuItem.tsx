import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { IMenu } from "./menu.data";
import styles from "./Menu.module.scss";

interface IMenuItem {
  navItem: IMenu;
}

const MenuItem = ({ navItem }: IMenuItem) => {
  const { i18n } = useTranslation();

  const isCurrent = i18n.language === navItem.lan;

  return (
    <li className={styles.item}>
      <button
        className="border-none outline-none"
        onClick={() => i18n.changeLanguage(navItem.lan)}
      >
        {navItem.title}
      </button>
      {isCurrent && (
        <motion.div layoutId="activeItem" className={styles.line}></motion.div>
      )}
    </li>
  );
};

export default MenuItem;
