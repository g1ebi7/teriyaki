import Link from "next/link";

import styles from "./Buttons.module.scss";

const Buttons = () => {
  return (
    <div className={styles.wrap}>
      <Link href={"/auth"}>Log In</Link>
      <Link href={"/auth"}>Sign Up</Link>
    </div>
  );
};
export default Buttons;
