import IndividualProjects from "../_components/IndividualProjects";

function RayTracingScenes() {
  return (
    <IndividualProjects
      githubLink="https://github.com/ThomasVy/RayTracingScenes"
      title="Ray Tracing Scenes"
      video="/videos/RayTrace.mp4"
    >
      <p>
        Ray tracing scene renderer. Displays two real-time ray tracing scenes;
        change scenes with key 1 and key 2. Press T key to toggle refraction
        object in both scenes.
        <br />
        Written in C++, OpenGL, Ray Tracing, Reflection and Refraction
        calculations
      </p>
    </IndividualProjects>
  );
}
export default RayTracingScenes;
