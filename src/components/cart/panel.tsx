import { useDispatch } from "react-redux";
import { IItem } from "../../types/item";
import { cartActions } from "../../store/cartSlice";

type PanelProps = {
  count: number;
  item: IItem;
};

const Panel: React.FC<PanelProps> = ({ count, item }) => {
  const disptach = useDispatch();

  return (
    <div className="item-panel">
      <button
        onClick={() => {
          disptach(cartActions.removeFromCart(item));
        }}
        className="item-panel__btn"
      >
        -
      </button>
      <span className="item-panel__count">{count}</span>
      <button
        onClick={() => {
          disptach(cartActions.addToCart(item));
        }}
        className="item-panel__btn"
      >
        +
      </button>
    </div>
  );
};

export default Panel;
