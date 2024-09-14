import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface SlideInEffectProps {
  content: React.ReactNode[];
}

const SlideInEffect = ({ content }: SlideInEffectProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [columns, setColumns] = useState(`columns-${content.length}`);

  useEffect(() => {
    setColumns(`columns-${content.length}`);

    console.log("columns class: ", columns)
  }, [content, isInView]);

  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={parentVariants}
      className={`px-2 ${columns}`}
    >
      {content.map((item, index) => (
        <motion.div key={index} variants={variants}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SlideInEffect;
