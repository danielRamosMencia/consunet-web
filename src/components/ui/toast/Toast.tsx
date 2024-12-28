import { useEffect } from "react";

type ToastTypes = "success" | "error" | "warning" | "info";

type ToastProps = {
  message: string;
  type: ToastTypes;
  autoCloseTime?: number;
  onClose?: () => void;
};

const Toast = ({ message, type, autoCloseTime, onClose }: ToastProps) => {
  const typeStyles: Record<ToastTypes, string> = {
    success: "bg-green-100 text-green-700 border-green-500",
    error: "bg-red-100 text-red-700 border-red-500",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
    info: "bg-blue-100 text-blue-700 border-blue-500",
  };

  useEffect(() => {
    if (autoCloseTime) {
      const timer = setTimeout(() => {
        onClose?.();
      }, autoCloseTime);
      return () => clearTimeout(timer);
    }
  }, [autoCloseTime, onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 max-w-sm w-full border-l-4 p-4 rounded shadow-md flex items-center justify-between space-x-4 ${typeStyles[type]}`}
    >
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          Cerrar
        </button>
      )}
    </div>
  );
};
Toast.displayName = "Toast";

export default Toast;
