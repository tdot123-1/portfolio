import { useAnimate, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  isVisible: boolean;
}

const TypingEffect = ({ text, speed = 50, isVisible }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [scope, animate] = useAnimate();

  useEffect(() => {
    console.log(isVisible)
    if (!isVisible) return;

    const startTyping = async () => {
      for (let i = 0; i < text.length; i++) {
        setDisplayedText(text.slice(0, i));

        await animate(scope.current, { opacity: [0, 1] }, { duration: 0.1 });

        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };

    startTyping();
  }, [text, speed, animate, scope]);

  return (
    <>
      <motion.div
        ref={scope}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-slate-300"> {displayedText}</p>
      </motion.div>
    </>
  );
};

export default TypingEffect;
