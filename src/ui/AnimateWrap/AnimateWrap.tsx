import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IAnimateWrap {
  children: React.ReactNode;
}

const AnimateWrap = ({ children }: IAnimateWrap) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div></div>;

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrap;
