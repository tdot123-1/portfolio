import { ReactNode, useEffect, useRef, useState } from "react";

interface TriggerEffectProps {
  children: (isVisible: boolean) => ReactNode;
  threshold?: number;
}

const TriggerEffect = ({ children, threshold = 0.1 }: TriggerEffectProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("trigger: ", isVisible)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return <div ref={ref}>{children(isVisible)}</div>;
};

export default TriggerEffect;
