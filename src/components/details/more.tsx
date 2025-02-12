import { IMore } from "../../types/more";
import okIcon from "/assets/img/icon-ok.svg";

type MoreProps = {
  descriptionLong: string;
  more: IMore[];
};

const More: React.FC<MoreProps> = ({ descriptionLong, more }) => {
  return (
    <>
      <div className="description__desc">
        <h3 className="description__header">About</h3>
        <p className="description__long">{descriptionLong}</p>
      </div>
      <div className="description__desc">
        <h3 className="description__header">More details</h3>
        {more.map((detail) => (
          <div key={detail.id} className="description__more">
            <img src={okIcon} alt="ok icon" className="description__ok-icon" />
            <p className="description__detail">{detail.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default More;
