import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ReactNode } from "react";

type VideoProps = {
  video?: `/videos/${string}`;
};

type IndividualProjectsProps = {
  title: string;
  children: ReactNode;
  githubLink: `https://github.com/ThomasVy/${string}`;
} & VideoProps;

function DisplayVideo({ video }: VideoProps) {
  if (!video) {
    return (
      <p className="m-6 text-center font-semibold text-slate-300">
        No Video Available
        <br />
        🚧 Under Construction 🚧
      </p>
    );
  }
  return <video className="m-6" controls src={video} />;
}

function IndividualProjects({
  title,
  video,
  children,
  githubLink,
}: IndividualProjectsProps) {
  return (
    <>
      <h1 className="m-6 font-body text-3xl md:text-5xl">&lt;{title} /&gt;</h1>
      {children}
      <DisplayVideo video={video} />
      <a
        href={githubLink}
        className="btn rounded bg-sky-700 px-3 py-2 font-bold"
      >
        <FontAwesomeIcon icon={faGithub} className="mr-1" />
        GITHUB
      </a>
    </>
  );
}
export default IndividualProjects;
