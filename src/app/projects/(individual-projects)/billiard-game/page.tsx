import IndividualProjects from "../_components/IndividualProjects";

function BilliardGame() {
  return (
    <IndividualProjects
      title="Billiard Game"
      githubLink="https://github.com/ThomasVy/Billiard-Game"
      video="/videos/BilliardGame.mp4"
    >
      <p>
        Pool game that you can play in single player or two player. Sink all
        your balls to win; if your cue ball sinks, you lose. When playing, press
        '1' to bring you back to the menu, press and hold spacebar to charge
        your shots. Press 'b' to reset your shot power. After winning or losing,
        press any key to reset the game. <br />
        Written in Processing 3.
      </p>
    </IndividualProjects>
  );
}
export default BilliardGame;
