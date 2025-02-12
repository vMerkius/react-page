import { Link } from "react-router";

type SocialIconProps = {
  name: string;
  url: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ name, url }) => {
  const imgUrl = `/assets/img/icon-${name}.svg`;

  return (
    <Link to={url} className="footer__icon">
      <img src={imgUrl} alt={name} className="footer__icon" />
    </Link>
  );
};

export default SocialIcon;
