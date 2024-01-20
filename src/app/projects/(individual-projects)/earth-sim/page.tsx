import IndividualProjects from "../_components/IndividualProjects";

function EarthSim() {
  return (
    <>
      <IndividualProjects
        githubLink="https://github.com/ThomasVy/Earth-Simulation"
        title="Earth Simulation"
        video="/videos/EarthSim.mp4"
      >
        <p>
          Simulation of the Sun, Earth, and Moon. Uses Lambertian Shading to
          simulate the sun emitted from the Sun. Uses matrix manipulation to
          transform the planets. Press and hold left click while moving the
          mouse to rotate the camera around the sun. Use scroll wheel to zoom in
          and out from the sun. <br />
          Written in C++ and OpenGL. Uses concepts from graphics programming
          such as spherical mesh generation, shaders, phong relections, render
          pipeline, and Model View Projection matrix manipulations.
        </p>
      </IndividualProjects>
    </>
  );
}
export default EarthSim;
