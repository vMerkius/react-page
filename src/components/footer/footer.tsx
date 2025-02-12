import { useRef } from "react";
import FooterColumn from "./footer-column";
import InputWithButton from "../inputs/input-with-button";
import FooterBottom from "./footer-bottom";
import { Link } from "react-router-dom";
import {
  FOOTER_COLUMN_1,
  FOOTER_COLUMN_2,
  FOOTER_COLUMN_3,
} from "../../data/footer-data";

const Footer = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!inputRef.current) return;
  };

  return (
    <footer className="footer large-top-gap">
      <div className="footer__upper">
        <div className="footer__left">
          <Link
            to="/"
            className="logo"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Hekto
          </Link>
          <InputWithButton
            inputRef={inputRef}
            handleClick={handleClick}
            type="email"
            name="email"
            placeholder="Enter Email Address"
          >
            Sign up{" "}
          </InputWithButton>
          <Link
            className="footer__item footer__address"
            to="https://www.google.com/maps/search/?api=1&query=17+Princess+Road,+London,+Greater+London+NW1+8JR,+UK"
            target="_blank"
          >
            17 Princess Road, London, Greater London NW1 8JR, UK
          </Link>
        </div>
        <FooterColumn header="Categories" elements={FOOTER_COLUMN_1} />
        <FooterColumn header="Customer Care" elements={FOOTER_COLUMN_2} />
        <FooterColumn header="Pages" elements={FOOTER_COLUMN_3} />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
