import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect = ({ text, speed = 50 }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {

    // reference to timeout to be cleared
    let typingTimeout: NodeJS.Timeout;

    // display letters one by one
    const startTyping = () => {
      if (currentIndex < text.length && isInView) {
        // display the char at current index, increase current index by 1
        typingTimeout = setTimeout(() => {
          setDisplayedText((prevState) => prevState + text[currentIndex]);
          setCurrentIndex((prevState) => prevState + 1);
        }, speed);
      }
    };

    // only start typing when div is in view
    if (isInView) {
      startTyping();
    }

    // clear timeout on unmount or div is out of view
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [text, speed, isInView, currentIndex]);

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
