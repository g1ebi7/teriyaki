import Link from "next/link";

import styles from "./Footer.module.scss";

import Container from "@/ui/Container/Container";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className="flex justify-between">
        <div>
          <Link href={"mailto:teriyakisites@gmail.com"}>
            teriyakisites@gmail.com
          </Link>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
