import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import Menu from "./Menu/Menu";
import styles from "./Navbar.module.scss";
import Buttons from "./Buttons/Buttons";

import logo from "@/assets/images/logo.png";
import Container from "@/ui/Container/Container";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Svg } from "@/ui/Svg/Svg";

const Navbar = () => {
  const user = useTypedSelector((state) => state.user);
  const { push, pathname } = useRouter();

  return (
    <Container className={cn("flex items-center", styles.cont)}>
      <div className="flex items-center mr-auto">
        <Image
          onClick={() => push("/")}
          src={logo}
          width={147}
          height={48}
          alt="Teriyaki"
          className="cursor-pointer"
        />
        <div className={styles.line}></div>
        <Menu />
      </div>
      {!user && <Buttons />}
    </Container>
  );
};
export default Navbar;
