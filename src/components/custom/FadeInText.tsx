import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
}

const FadeInText = ({ text, speed = 100 }: TypingAnimationProps) => {
  const [displayedText, setDIsplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDIsplayedText((prev) => prev + text[currentIndex]);
        currentIndex += 1;
        setTimeout(typeText, speed);
      }
    };

    typeText();
    return () => setDIsplayedText("");
  }, [text, speed]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-slate-300"> {displayedText}</p>
      </motion.div>
    </>
  );
};

export default FadeInText;
