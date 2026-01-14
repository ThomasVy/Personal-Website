import { motion } from "framer-motion";
import Card from "./Card";
import { ReactNode } from "react";
type ITEM = {
  title: string;
  content: ReactNode;
};

const LEFT_ITEMS: ITEM[] = [
  {
    title: "Background",
    content: (
      <p>
        I am a Software Engineer born and raised in Calgary, AB, Canada. My
        professional background is in C++ and security, but I am also
        experienced in graphics programming and web development. <br />
        <br />
        <i className="text-sm font-bold text-gray-300">
          Note: I am also a shameless cat dad. 😸
        </i>
      </p>
    ),
  },
  {
    title: "Education / Certifications",
    content: (
      <ul className="ml-4 list-disc">
        <li>
          Bachelor of Science in Software Engineering (May 2021)
          <ul className="ml-5 list-[square]">
            <li>University of Calgary</li>
            <li>3.89 GPA</li>
            <li>Graduated with Internship & Distinctions</li>
          </ul>
        </li>
        <li>
          Certified ScrumMaster CSM (2023)
          <ul className="ml-5 list-[square]">
            <li className="text-blue-400 hover:underline">
              <a href="https://bcert.me/bc/html/show-badge.html?b=oqeydsjk">
                Link
              </a>
            </li>
          </ul>
        </li>

        <li>
          GIAC Security Essentials Certification GISO (2023)
          <ul className="ml-5 list-[square]">
            <li className="text-blue-400 hover:underline">
              <a href="https://www.credly.com/badges/7de59622-2f8a-4f4c-beea-c56f078d0bc7/public_url">
                Link
              </a>
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const RIGHT_ITEMS: ITEM[] = [
  {
    title: "Work Experience",
    content: (
      <>
        <p>

          Based in Calgary, AB, Canada. 🍁
          I work at Cisco Systems Ltd. as a Endpoint Software Engineer since 2021 where I
          develop their C++ advanced malware detection software and their data loss prevention software for Windows.
          Other expertises include OpenGL programming, unit testing, containerization, and CI/CD.
        </p>
        <br />
        <p>
          I previously worked at GEOSLOPE/SEEQUENT where I interned as a C++ Windows
          developer working on their geotechnical solution suite. Based in
          Calgary, AB, Canada.
        </p>
      </>
    ),
  },
  {
    title: "Programming Knowledge",
    content: (
      <div>
        A couple of languages that I have proficient knowledge
        <ul className="ml-1">
          <li>C/C++ (C++20/23)</li>
          <li>Python 3</li>
          <li>React19/NextJS</li>
          <li>Typescript</li>
        </ul>
      </div>
    ),
  },
];

function AboutMe() {
  return (
    <motion.div
      animate={{ opacity: [0, 0.5, 1], y: [100, 0, 0] }}
      transition={{
        duration: 2,
        times: [0, 0.5, 1],
        ease: "easeInOut",
      }}
      key="aboutMe"
      className="mx-6 mt-6 grid max-w-screen-md flex-grow gap-4 md:mx-auto md:grid-cols-2"
    >
      <div id="leftAbout" className="flex flex-col gap-4">
        {LEFT_ITEMS.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.content}
          </Card>
        ))}
      </div>
      <div id="rightAbout" className="flex flex-col gap-4">
        {RIGHT_ITEMS.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.content}
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
export default AboutMe;
