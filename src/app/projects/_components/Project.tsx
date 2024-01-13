export type ProjectPreviewProps = {
  title: string;
  technology: string;
  image: React.ReactNode;
};

function ProjectPreview({ title, technology, image }: ProjectPreviewProps) {
  return (
    <div className="group/item flex h-full gap-0 rounded p-4 hover:cursor-pointer hover:bg-slate-500">
      <div>
        <div className="flex h-10 items-center gap-2 overflow-hidden">
          {image}
          <h1 className="text-left text-sm font-semibold leading-none lg:text-lg">
            {title}
          </h1>
        </div>
        <p className="mt-1 text-left text-xs md:text-sm">{technology}</p>
      </div>
      <a className="group/edit invisible ml-auto flex self-center whitespace-nowrap rounded-full py-1 pl-4 pr-3 text-sm text-slate-700 transition hover:bg-slate-400 group-hover/item:visible">
        <span className="font-semibold transition group-hover/edit:text-slate-900">
          Preview
        </span>
        <svg
          className="group-hover mt-px h-5 w-5 text-slate-700 transition group-hover/edit:translate-x-1 group-hover/edit:text-slate-900 "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}
export default ProjectPreview;
