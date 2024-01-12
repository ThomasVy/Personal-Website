import Image from "next/image";
import profile from "@/../public/profile.jpg";

function ProfileWelcome() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
      <Image
        alt="Profile"
        className="shrink-0 overflow-hidden rounded-full"
        src={profile}
      />
      <h1
        className="font-typewrite before:animate-titleTyping after:animate-titleBlink 
        before:height 
        relative
        text-nowrap
        py-2
        text-4xl
        font-bold 
        before:absolute
        before:inset-0
        
        before:bg-neutral-800 
        after:absolute
        after:inset-0
        after:w-1 
        after:bg-white
        md:text-6xl"
      >
        Thomas Vy
      </h1>
    </div>
  );
}
export default ProfileWelcome;
