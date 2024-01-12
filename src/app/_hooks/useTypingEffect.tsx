"use client";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

function useTypingEffect(text: string, duration: number) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: duration,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return displayText;
}
export default useTypingEffect;
