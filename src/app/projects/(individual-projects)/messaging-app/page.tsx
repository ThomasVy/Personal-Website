import IndividualProjects from "../_components/IndividualProjects";

function MessagingApp() {
  return (
    <IndividualProjects
      title="P2P Messaging App"
      video="/videos/P2PMessagingApp.mp4"
      githubLink="https://github.com/ThomasVy/P2P-Messaging-App"
    >
      <p>
        Messaging app that uses P2P to send messages along. In the beginning,
        users connect to the registry using UDP to get the lists of users. Then
        the users sends/receives peer messages and text snippets from peers by
        TCP. New users will recieve catch up messages to allow them to see
        previous messages sent before they joined. The registry will send a done
        message to let all the users quit. Uses Lamport timestamps to organize
        messages. <br />
        Written in Python 3, TCP/UDP sockets, concurrent programming.
      </p>
    </IndividualProjects>
  );
}
export default MessagingApp;
