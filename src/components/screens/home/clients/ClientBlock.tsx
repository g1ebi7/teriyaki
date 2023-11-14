import Image from "next/image";
import cn from "classnames";

import styles from "./Clients.module.scss";

import quotes from "@/assets/images/qoutes.png";

interface IClientBlock {
  green?: boolean;
  title: string;
}

const ClientBlock = ({ green, title }: IClientBlock) => {
  return (
    <div className={cn(styles.block, "bg-gray-500", { "bg-green": green })}>
      <Image src={quotes} width={72} height={72} alt="quotes" />
      <p>{title}</p>
    </div>
  );
};

export default ClientBlock;
