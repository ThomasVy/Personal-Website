import IndividualProjects from "../_components/IndividualProjects";

function BookReview() {
  return (
    <IndividualProjects
      title="Book Review"
      githubLink="https://github.com/ThomasVy/Laravel-Book-Review"
      video="/videos/LaravelBook.mp4"
    >
      <p>
        A website for users to subscribe and submit book reviews. Books can only
        be reviewed by admins and users that were previously subscribed. Anyone
        can register as a new user to begin reviewing books. Admins can edit
        users' information, unsubscribe or subscriber users to books, edit
        authors' information, create new books, delete books, and edit book
        information. <br />
        Written in Laravel, HTML/CSS, PHP, MySQL.
      </p>
    </IndividualProjects>
  );
}
export default BookReview;
