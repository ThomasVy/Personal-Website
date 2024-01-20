import IndividualProjects from "../_components/IndividualProjects";

function TicTacToe() {
  return (
    <IndividualProjects
      githubLink="https://github.com/ThomasVy/TicTacToe-Game"
      title="TicTacToe Game"
      video="/videos/TicTacToe.mp4"
    >
      <p>
        TicTacToe game using server and client communication over TCP sockets.
        Server starts and waits for two players to connect. Once two players
        connect, then the server asks for names and begins the match. Players
        place X&apos;s or O&apos;s in turns until one player completes a
        row/column/diagonal or when there&apos;s no legal moves left. <br />
        Written in Java, TCP sockets.
      </p>
    </IndividualProjects>
  );
}
export default TicTacToe;
