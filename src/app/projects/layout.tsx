export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-4 flex max-w-screen-md flex-grow flex-col items-center md:mx-auto">
      {children}
    </div>
  );
}
