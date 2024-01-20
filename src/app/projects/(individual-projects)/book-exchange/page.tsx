import IndividualProjects from "../_components/IndividualProjects";

function BookExchange() {
  return (
    <IndividualProjects
      githubLink="https://github.com/ThomasVy/BookExchange"
      title="Book Exchange"
      video="/videos/BookExchange.mp4"
    >
      <p>
        A book exchange website for students. Users can view courses,
        publishers, authors, listings, and the books associated with them. Users
        can create listings for a specific book so that other users can make an
        online or pick up order. Users can leave reviews for others and they can
        view and change their information on their user page. Admins can
        add/edit authors, publishers, courses, and listings.
        <br />
        Written in PHP, Apache, MySQL, HTML/CSS.
      </p>
    </IndividualProjects>
  );
}
export default BookExchange;
