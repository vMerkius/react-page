import { createPortal } from "react-dom";

type ModalProps = {
  img: string;
  name: string;
  setShowModal: (prev: boolean) => void;
};

const Modal: React.FC<ModalProps> = ({
  img,
  name,
  setShowModal,
}): React.ReactElement => {
  const handleClose = () => {
    setShowModal(false);
  };

  return createPortal(
    <dialog className="modal" open>
      <div className="modal__img-container">
        <img src={img} alt={name} className="modal__img" />
        <button onClick={handleClose} className="modal__close">
          X
        </button>
      </div>
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
