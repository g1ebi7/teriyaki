import cn from "classnames";
import { useState } from "react";
import Image from "next/image";

import styles from "./Accordion.module.scss";

import arrow from "@/assets/images/arrowdown.svg";

interface IAccordion {
  title: string;
  content: string;
  id: number;
  currentId: number;
  onClick: (id: number) => void;
}

const Accordion = ({ title, content, id, onClick, currentId }: IAccordion) => {
  return (
    <div className={styles.gWrap}>
      <div className={styles.wrap} onClick={() => onClick(id)}>
        <h1 className={styles.title}>{title}</h1>
        <Image
          src={arrow}
          width={29}
          height={29}
          alt="arrow-down"
          className={cn({ [styles._active]: id === currentId })}
        />
      </div>
      <div
        className={cn(styles.content, { [styles._active]: id === currentId })}
      >
        <p>
          <code dangerouslySetInnerHTML={{ __html: content }} />
        </p>
      </div>
    </div>
  );
};
export default Accordion;
