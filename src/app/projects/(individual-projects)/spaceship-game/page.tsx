import IndividualProjects from "../_components/IndividualProjects";

function SpaceshipGame() {
  return (
    <IndividualProjects
      githubLink="https://github.com/ThomasVy/Spaceship-game"
      title="Spaceship Game"
      video="/videos/Spaceship.mp4"
    >
      <p>
        Control a spaceship with WD key to move forward/back and mouse clicks to
        change the orientation of the ship. Gems randomly spawn on the map.
        Collect them all without touching the fires to win. <br />
        Written in C++, OpenGL, matrix manipulation, linear algebra projections
        and matrix manipulations.
      </p>
    </IndividualProjects>
  );
}
export default SpaceshipGame;
