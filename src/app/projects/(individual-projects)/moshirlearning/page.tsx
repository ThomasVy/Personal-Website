import IndividualProjects from "../_components/IndividualProjects";

function MoshirLearning() {
  return (
    <IndividualProjects
      title="MoshirLearning"
      video="/videos/MoshirLearning.mp4"
      githubLink="https://github.com/ThomasVy/MoshirLearning"
    >
      <p>
        A class management software for students and professors (Similar to
        D2L). Professors can create courses, set the course active or inactive,
        enroll/unenroll students, upload assignments, download and grade
        submissions, send group emails to students. A student can view courses
        they&apos;re enrolled in and that are active, view and download
        assignments, view grades, upload assignment submissions, view other
        students enrolled in the class, and send an email to the professor. In
        the video, the program on the left is the professor and the program on
        the right is the student. This project was completed for ENSF 409 in
        2017 and won outstanding project. <br />
        Written in Java, MySQL, TCP sockets, MVC.
      </p>
    </IndividualProjects>
  );
}
export default MoshirLearning;
