import avatar from "../../../../public/thomas_transparent.png";
import Image from "next/image";

export default function Logo() {
  return (
    <a
      href="/"
      className="flex items-center space-x-3 hover:text-blue-500 rtl:space-x-reverse"
    >
      <Image className="w-12" src={avatar} alt="Me" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold">
        Thomas
      </span>
    </a>
  );
}
