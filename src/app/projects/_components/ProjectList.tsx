import Project, { ProjectPreview } from "./Project";

type ProjectListProps = {
  projects: ProjectPreview[];
};

function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="mt-4 grid rounded-md bg-slate-600 p-2 md:grid-cols-2">
      {projects.map((project) => {
        return (
          <li key={project.title}>
            <Project {...project} />
          </li>
        );
      })}
    </ul>
  );
}
export default ProjectList;
