"use client";
import { AnimatePresence, motion } from "framer-motion";
import ProfileWelcome from "./_components/Home/ProfileWelcome";
import { useEffect, useState } from "react";
import AboutMe from "./about/page";

function RenderProfileWelcome() {
  return (
    <motion.div
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      key="profile"
      className="m-auto"
    >
      <ProfileWelcome />
    </motion.div>
  );
}
export default function Home() {
  const [finishedInitialLoad, setFinishedInitialLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinishedInitialLoad(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {finishedInitialLoad ? <AboutMe /> : RenderProfileWelcome()}
    </AnimatePresence>
  );
}
