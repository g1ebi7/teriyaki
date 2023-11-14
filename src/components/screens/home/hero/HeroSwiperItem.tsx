import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "./Hero.module.scss";
import { IHeroItem } from "./hero.interface";

import link from "@/assets/images/link.svg";

const HeroSwiperItem = ({ example, index }: IHeroItem) => {
  const { t } = useTranslation();

  return (
    <div className={styles.block}>
      <div>
        <div>
          <h2>{t(`hero${index}`)}</h2>
        </div>
      </div>
      <div className="mb-6">
        <Image
          src={example}
          width={525}
          height={297}
          alt="First Site Example"
        />
      </div>
    </div>
  );
};
export default HeroSwiperItem;
