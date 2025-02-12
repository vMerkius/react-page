import ButtonMain from "../UI/button-main";
import newsletterImg from "/assets/img/newsletter.png";

const Newsletter = () => {
  return (
    <div className="newsletter medium-top-gap">
      <img src={newsletterImg} alt="Newsletter" className="newsletter__img" />

      <div className="newsletter__content">
        <h2 className="newsletter__header">
          Get Latest Update By Subscribe Our Newsletter
        </h2>
        <ButtonMain>Subscribe</ButtonMain>
      </div>
    </div>
  );
};

export default Newsletter;
