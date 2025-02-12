import { Link } from "react-router-dom";
import { IUrlElement } from "../../types/social";

type FooterColumnProps = {
  header: string;
  elements: IUrlElement[];
};

const FooterColumn: React.FC<FooterColumnProps> = ({ header, elements }) => {
  return (
    <div className="footer__column">
      <h3 className="footer__header">{header}</h3>
      <ul className="footer__list">
        {elements.map((element) => (
          <li key={element.id}>
            <Link
              className="footer__item"
              to={element.url}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
