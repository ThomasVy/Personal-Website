import NavButtons from "./NavButtons";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav className="sticky left-0 right-0 top-0 z-20 border-gray-700 bg-gray-700">
      <div className="mx-auto flex max-w-screen-xl p-4">
        <div>
          <Logo />
        </div>
        <div className="ml-auto">
          <NavButtons />
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
