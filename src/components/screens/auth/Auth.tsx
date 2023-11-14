import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import cn from "classnames";

import styles from "./Auth.module.scss";
import AuthForm from "./AuthForm";

import Container from "@/ui/Container/Container";
import Section from "@/ui/Section";
import logo from "@/assets/images/logo.png";

const Auth = () => {
  const { push } = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <Section className="h-[90vh]">
      <Container className="h-full">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className={styles.logo}>
            <Image
              onClick={() => push("/")}
              src={logo}
              width={147}
              height={48}
              alt="Teriyaki"
              className="cursor-pointer z-10 sticky"
            />
            <div className={styles.logoBall1}></div>
            <div className={styles.logoBall2}></div>
            <div className={styles.logoBall3}></div>
            <div className={styles.logoBall4}></div>
          </div>
          <AuthForm />
        </div>
      </Container>
      <div className={cn(styles.line, styles.line1)}></div>
      <div className={cn(styles.line, styles.line2)}></div>
      <div className={cn(styles.line, styles.line3)}></div>
    </Section>
  );
};
export default Auth;
