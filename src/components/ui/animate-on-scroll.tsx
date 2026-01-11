import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variants?: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
  initial?: string;
  animate?: string;
  transition?: { duration: number; delay?: number };
  className?: string;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  variants = defaultVariants,
  initial = "hidden",
  animate = "visible",
  transition = { duration: 0.4, delay: 0.1 },
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
