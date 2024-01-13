"use client";
import { motion } from "framer-motion";
import useTypingEffect from "@/app/_hooks/useTypingEffect";

type DisplayTypingProps = {
  text: string;
  style: string;
  duration: number;
};

function DisplayTyping({ text, style, duration }: DisplayTypingProps) {
  const displayText = useTypingEffect(text, duration);
  return (
    <div>
      <motion.span className={`bold font-typewrite ${style}`}>
        {displayText}
      </motion.span>
      <div
        className={`bold animate-blink ${style} font-typewrite inline-block w-px`}
      >
        |
      </div>
    </div>
  );
}
export default DisplayTyping;
