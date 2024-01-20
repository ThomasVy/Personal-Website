import { ProjectPreview } from "./_components/Project";
import Image from "next/image";
import DisplayTyping from "@/app/_components/DisplayTyping";
import ProjectList from "./_components/ProjectList";
import Cpp from "/public/Cpp.png";
import ReactLogo from "/public/React.png";
import Laravel from "/public/Laravel.png";
import Python from "/public/python-logo-only.png";
import Java from "/public/java.png";
import Php from "/public/php.png";
import Processing from "/public/Processing_3.png";

const PROJECTS: ProjectPreview[] = [
  {
    title: "Earth-Simulation",
    technology:
      "OpenGL, Mesh generation, Phong Reflections, Model View Projection matrix manipulations",
    image: <Image src={Cpp} width={32} alt="Image" />,
    video: "/videos/EarthSim.mp4",
    link: "/projects/earth-sim",
  },
  {
    title: "Inventory Tracker",
    technology: "Typescript, Express, MongoDB, Zod, TanStack Query",
    image: <Image src={ReactLogo} width={32} alt="Image" />,
    video: null,
    link: "/projects/inventory-tracker",
  },
  {
    title: "Book Review",
    technology: "HTML/CSS, PHP, MySQL",
    image: <Image src={Laravel} width={32} alt="Image" />,
    video: "/videos/LaravelBook.mp4",
    link: "/projects/book-review",
  },
  {
    title: "MoshirLearning",
    technology: "MySQL, TCP Sockets, MVC",
    image: (
      <Image
        src={Java}
        width={32}
        className="rounded-full bg-white"
        alt="Image"
      />
    ),
    video: "/videos/MoshirLearning.mp4",
    link: "/projects/moshirlearning",
  },
  {
    title: "Spaceship Game",
    technology: "OpenGL, matrix manipulation, linear algebra",
    image: <Image src={Cpp} width={32} alt="Image" />,
    video: "/videos/Spaceship.mp4",
    link: "/projects/spaceship-game",
  },
  {
    title: "TicTacToe Game",
    technology: "Swing, TCP Sockets",
    image: (
      <Image
        src={Java}
        width={32}
        className="rounded-full bg-white"
        alt="Image"
      />
    ),
    video: "/videos/TicTacToe.mp4",
    link: "/projects/tictactoe-game",
  },
  {
    title: "Ray Tracing Scenes",
    technology: "OpenGL, Ray Tracing, Materials",
    image: <Image src={Cpp} width={32} alt="Image" />,
    video: "/videos/RayTrace.mp4",
    link: "/projects/ray-tracing-scenes",
  },
  {
    title: "Book Exchange",
    technology: "Apache, MySQL, HTML/CSS",
    image: <Image src={Php} width={32} alt="Image" />,
    video: "/videos/BookExchange.mp4",
    link: "/projects/book-exchange",
  },
  {
    title: "P2P Messaging App",
    technology: "TCP/UDP Sockets, Threads",
    image: <Image src={Python} width={32} alt="Image" />,
    video: "/videos/P2PMessagingApp.mp4",
    link: "/projects/messaging-app",
  },
  {
    title: "Billard Game",
    technology: "Game loop, animation",
    image: <Image src={Processing} width={32} alt="Image" />,
    video: "/videos/BilliardGame.mp4",
    link: "/projects/billiard-game",
  },
];

function Projects() {
  return (
    <>
      <h1 className="m-6 font-body text-3xl md:text-5xl">&lt;Projects /&gt;</h1>
      <div className="text-center">
        <DisplayTyping
          text="Some projects that you'll love"
          style="text-sm md:text-lg"
          duration={3}
        />
      </div>
      <ProjectList projects={PROJECTS} />
    </>
  );
}
export default Projects;
