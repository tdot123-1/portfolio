import {
  IconBrandDjango,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
} from "@tabler/icons-react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const SpinGrowEffect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { scale: 0, rotate: 0, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 720,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={parentVariants}
      className="w-2/5 mx-auto grid grid-cols-3 grid-rows-2"
    >
      <motion.div variants={variants} className="flex justify-center py-3">
        <IconBrandReact className="text-slate-800 size-10" />
      </motion.div>
      <motion.div variants={variants} className="flex justify-center py-3">
        <IconBrandJavascript className="text-slate-800 size-10" />
      </motion.div>
      <motion.div variants={variants} className="flex justify-center py-3">
        <IconBrandPython className="text-slate-800 size-10" />
      </motion.div>
      <motion.div variants={variants} className="flex justify-center py-3">
        <IconBrandHtml5 className="text-slate-800 size-10" />
      </motion.div>
      <motion.div variants={variants} className="flex justify-center py-3">
        <IconBrandDjango className="text-slate-800 size-10" />
      </motion.div>
      <motion.div variants={variants} className="flex justify-center py-3">
        <IconBrandNodejs className="text-slate-800 size-10" />
      </motion.div>
    </motion.div>
  );
};

export default SpinGrowEffect;
