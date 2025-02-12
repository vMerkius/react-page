import socialData from "../../data/socials-data";
import SocialIcon from "./social-icon";

const FooterBottom = () => {
  return (
    <div className="footer__bottom">
      <p className="footer__policy">©Webecy - All Rights Reserved</p>
      <div className="footer__icons">
        {socialData.map((social) => (
          <SocialIcon key={social.id} name={social.name} url={social.url} />
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
