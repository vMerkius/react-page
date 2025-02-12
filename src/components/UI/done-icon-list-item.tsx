import okIcon from "/assets/img/icon-ok.svg";

type DiscountListItemProps = {
  children: React.ReactNode;
};

const DoneIconListItem: React.FC<DiscountListItemProps> = ({ children }) => {
  return (
    <li className="done-icon-list-item">
      <img src={okIcon} alt="Ok Icon" className="done-icon-list-item__icon" />
      <p className="done-icon-list-item__text">{children}</p>
    </li>
  );
};

export default DoneIconListItem;
