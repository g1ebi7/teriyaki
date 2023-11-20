import cl from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./Solutions.module.scss";

interface IBlock {
  title: string;
  color: string;
  large?: boolean;
  image?: any;
}

const Block = ({ title, color, large, image }: IBlock) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0, transition: { type: "spring" } }}
      viewport={{ amount: 0.8 }}
      style={{ backgroundColor: color }}
      className={styles.block}
    >
      <h2 className={cl("text-lg", { "text-2xl": large })}>{title}</h2>
      {image ? (
        <Image src={image} width={108} height={128} alt="Programmer" />
      ) : (
        <p className="text-7xl text-white font-semibold">347</p>
      )}
    </motion.div>
  );
};
export default Block;
