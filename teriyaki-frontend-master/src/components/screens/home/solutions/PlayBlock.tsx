import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import playIcon from "@/assets/images/play.svg";

const PlayBlock = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Link href={"/"}>
        <Image src={playIcon} width={74} height={74} alt="play button" />
      </Link>
      <p>{t("player")}</p>
    </div>
  );
};
export default PlayBlock;
