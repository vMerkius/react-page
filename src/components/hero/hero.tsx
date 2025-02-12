import lampImg from "/assets/img/hero-lamp.png";
import headphonesImg from "/assets/img/hero-headphones.png";
import discountImg from "/assets/img/hero-discount.png";
import ButtonMain from "../UI/button-main";
import Dot from "../UI/dot";
import { useState } from "react";
import HeroPaging from "./hero-paging";
import { useNavigate } from "react-router";

const Hero = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  return (
    <section className="hero">
      <img src={lampImg} alt="Lamp image" className="hero__lamp-img" />
      <div className="hero__content">
        <p className="subtitle">Best Headphones For Your Life..</p>
        <h1>New Trendy Collection Headphones</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <ButtonMain
          onClick={() => {
            navigate("/products");
          }}
        >
          Shop Now
        </ButtonMain>
        <div className="hero__dot">
          <Dot color="#fb2e86" />
        </div>
      </div>
      <div className="hero__headphones">
        <img
          src={headphonesImg}
          alt="Headphones image"
          className="hero__headphones-img"
        />
        <img
          src={discountImg}
          alt="Discount image"
          className="hero__discount-img"
        />
        <div className="hero__circle hero__circle--light"></div>
        <div className="hero__circle hero__circle--dark"></div>
      </div>
      <HeroPaging page={page} handlePageChange={handlePageChange} />
    </section>
  );
};

export default Hero;
