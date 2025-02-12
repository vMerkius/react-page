import { useRef } from "react";
import InputWithButton from "../inputs/input-with-button";
import searchIcon from "/assets/img/icon-search.svg";
import { Link } from "react-router";
import navBarData from "../../data/nav-bar-data";

const NavBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {};
  return (
    <div className="header__nav-bar">
      <nav className="header__nav">
        <a href="/" className="logo">
          Hekto
        </a>
        <ul className="header__list">
          {navBarData.map((item) => (
            <li key={item.id} className="header__item">
              <Link to={item.link} className="header__link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <InputWithButton
        inputRef={inputRef}
        handleClick={handleClick}
        type="text"
        name="text"
        placeholder="Search"
      >
        <img
          src={searchIcon}
          alt="Search icon"
          className="header__icon-search"
        />
      </InputWithButton>
    </div>
  );
};

export default NavBar;
