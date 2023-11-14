import cl from "classnames";
import { forwardRef } from "react";
import { motion } from "framer-motion";

import styles from "./Title.module.scss";

interface ITitle {
  children: React.ReactNode;
  className?: string;
  hero?: boolean;
}

export const Title = forwardRef(
  ({ children, className, hero }: ITitle, ref: any) => {
    return (
      <h1
        ref={ref}
        className={cl(styles.title, className, { [styles.hero]: hero })}
      >
        {children}
      </h1>
    );
  }
);

Title.displayName = "Title";

export const MTitle = motion(Title);
