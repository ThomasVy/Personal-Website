import { ProjectPreviewProps } from "./_components/Project";
import Image from "next/image";
import DisplayTyping from "@/app/_components/DisplayTyping";
import ProjectList from "./_components/ProjectList";

const PROJECTS: ProjectPreviewProps[] = [
  {
    title: "Earth-Simulation",
    technology:
      "OpenGL, Mesh generation, Phong Reflections, Model View Projection matrix manipulations",
    image: <Image src="/Cpp.png" width={32} height={32} alt="Image" />,
  },
  {
    title: "Inventory Tracker",
    technology: "Typescript, Express, MongoDB, Zod, TanStack Query",
    image: <Image src="/React.png" width={32} height={32} alt="Image" />,
  },
  {
    title: "Laravel Book Review",
    technology: "HTML/CSS, PHP, MySQL",
    image: <Image src="/Laravel.png" width={32} height={32} alt="Image" />,
  },
  {
    title: "MoshirLearning",
    technology: "MySQL, TCP Sockets, MVC",
    image: (
      <Image
        src="/java.png"
        width={32}
        height={32}
        className="rounded-full bg-white"
        alt="Image"
      />
    ),
  },
  {
    title: "Spaceship Game",
    technology: "OpenGL, matrix manipulation, linear algebra",
    image: <Image src="/Cpp.png" width={32} height={32} alt="Image" />,
  },
  {
    title: "TicTacToe Game",
    technology: "Swing, TCP Sockets",
    image: (
      <Image
        src="/java.png"
        width={32}
        height={32}
        className="rounded-full bg-white"
        alt="Image"
      />
    ),
  },
  {
    title: "Ray Tracing Scenes",
    technology: "OpenGL, Ray Tracing, Materials",
    image: <Image src="/Cpp.png" width={32} height={32} alt="Image" />,
  },
  {
    title: "Book Exchange",
    technology: "Apache, MySQL, HTML/CSS",
    image: <Image src="/php.png" width={32} height={32} alt="Image" />,
  },
  {
    title: "P2P Messaging App",
    technology: "TCP/UDP Sockets, Threads",
    image: (
      <Image src="/python-logo-only.png" width={32} height={32} alt="Image" />
    ),
  },
  {
    title: "Billard Game",
    technology: "Game loop, animation",
    image: <Image src="/Processing_3.png" width={32} height={32} alt="Image" />,
  },
];

function page() {
  return (
    <div className="mx-4 flex max-w-screen-md flex-grow flex-col items-center md:mx-auto">
      <h1 className="m-6 font-body text-3xl md:text-5xl">&lt;Projects /&gt;</h1>
      <div className="text-center">
        <DisplayTyping
          text="Some projects that you'll love"
          style="text-sm md:text-lg"
          duration={3}
        />
      </div>
      <ProjectList projects={PROJECTS} />
    </div>
  );
}
export default page;
