"use client";
import {
  faLinkedin,
  faGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ClickIcon = {
  icon: IconDefinition;
  link: string;
};

const CLICKABLE_ICONS: ClickIcon[] = [
  { icon: faLinkedin, link: "https://www.linkedin.com/in/thomas-vy/" },
  { icon: faGithub, link: "https://github.com/ThomasVy" },
];

function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 py-6">
        <div className="flex justify-end gap-4">
          {CLICKABLE_ICONS.map((clickableIcon) => {
            return (
              <a
                key={clickableIcon.link}
                href={clickableIcon.link}
                className="hover:text-blue-500"
              >
                <FontAwesomeIcon icon={clickableIcon.icon} size="3x" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
