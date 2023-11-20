import NextNProgress from "nextjs-progressbar";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

interface ILayout {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const { pathname } = useRouter();

  const excludedPaths = ["/auth", "/profile", "/admin"];
  const adminPaths = ["/auth", "/admin"];

  return (
    <>
      <NextNProgress
        color="#000000e1"
        height={12}
        startPosition={0.3}
        stopDelayMs={200}
      />
      {!adminPaths.includes(pathname) && !pathname.includes("chat") && (
        <Navbar />
      )}
      {children}
      {!excludedPaths.includes(pathname) && !pathname.includes("chat") && (
        <Footer />
      )}
    </>
  );
};
export default Layout;
