import { ReactNode } from "react";
import Button from "./button/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  children?: ReactNode;
  closeButtonLabel?: string;
};

const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  children,
  closeButtonLabel = "Close",
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center border-b pb-3">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
        </div>

        {content && <p className="mt-4 text-gray-700">{content}</p>}

        {/* Children */}
        {children && <div className="mt-4">{children}</div>}

        {/* Footer */}
        <div className="mt-6 text-right">
          <Button
            key={"cancel-add-device"}
            onClick={onClose}
            type="button"
            variant="cancel"
          >
            {closeButtonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
Modal.displayname = "Modal";

export default Modal;
