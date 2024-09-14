import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  //isVisible: boolean;
}

const TypingEffect = ({ text, speed = 50 }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  //const [scope, animate] = useAnimate();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("in view: ", isInView);
    if (!isInView) return setDisplayedText("");

    const startTyping = async () => {
      for (let i = 0; i < text.length; i++) {
        setDisplayedText(text.slice(0, i));

        //await animate(scope.current, { opacity: [0, 1] }, { duration: 0.1 });

        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };

    startTyping();
  }, [text, speed, isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-slate-300"> {displayedText}</p>
      </motion.div>
    </>
  );
};

export default TypingEffect;
