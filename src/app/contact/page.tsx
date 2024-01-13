import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactPage() {
  return (
    <>
      <div className="m-auto text-balance px-5 font-rubik text-3xl">
        Best way to contact me?
        <br />
        <br />
        <ul className="flex gap-3 md:flex-col">
          <li>
            <a
              className="text-wrap hover:text-blue-500 hover:underline"
              href="mailto:vythomas97@gmail.com"
            >
              ✉️
              <span className="hidden md:inline-block">
                &nbsp; vythomas97@gmail.com
              </span>
            </a>
          </li>
          <li>
            <a
              className="text-wrap hover:text-blue-500 hover:underline"
              href="https://www.linkedin.com/in/thomas-vy/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
              <span className="hidden md:inline-block">
                &nbsp; https://www.linkedin.com/in/thomas-vy/
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default ContactPage;
