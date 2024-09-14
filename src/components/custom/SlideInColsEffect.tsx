import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowBigRightIcon } from "lucide-react";

const SlideInColsEffect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const bottomToTop = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  const topToBottom = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
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
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <>
      <h2 className="text-center py-4 underline font-semibold text-slate-900 text-2xl">
        My Projects
      </h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={parentVariants}
        className="grid grid-cols-2 md:grid-cols-3 h-5/6 gap-2"
      >
        <motion.div
          variants={bottomToTop}
          className="flex flex-col items-center justify-evenly"
        >
          <img className="w-56" src="https://placehold.co/600x400" />
          <img className="w-56" src="https://placehold.co/600x400" />
          <img className="w-56" src="https://placehold.co/600x400" />
        </motion.div>
        <motion.div
          variants={topToBottom}
          className="flex flex-col items-center justify-center"
        >
          <article className="text-slate-300 text-center mb-4 sm:mb-8">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio vel veritatis porro eius, quasi recusandae repudiandae
              reiciendis incidunt unde similique, facilis ea obcaecati explicabo
              nam quidem id delectus eligendi iste.
            </p>
          </article>
          <div className="flex justify-center md:hidden">
            <Link to="/projects">
              <Button
                className="bg-slate-300 text-slate-700 hover:bg-slate-400"
                variant="default"
              >
                Find out more <ArrowBigRightIcon />
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={bottomToTop}
          className="hidden md:flex justify-center items-center"
        >
          <Link to="/projects">
            <Button
              className="bg-slate-300 text-slate-700 hover:bg-slate-400"
              variant="default"
            >
              Find out more <ArrowBigRightIcon />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SlideInColsEffect;
