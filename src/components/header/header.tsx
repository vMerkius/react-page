import NavBar from "./nav-bar";
import TopBar from "./top-bar";

const Header = () => {
  return (
    <header className="header">
      <TopBar />
      <NavBar />
    </header>
  );
};

export default Header;
