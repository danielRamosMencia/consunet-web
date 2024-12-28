import React, { createContext, useContext, useState } from "react";
import Toast from "@components/ui/toast/Toast";

interface ToastContextProps {
  showToast: (
    message: string,
    type: "success" | "error" | "warning" | "info",
    autoCloseTime?: number
  ) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "warning" | "info";
    autoCloseTime?: number;
  } | null>(null);

  const showToast = (
    message: string,
    type: "success" | "error" | "warning" | "info",
    autoCloseTime: number = 5000
  ) => {
    setToast({ message, type, autoCloseTime });
    setTimeout(() => setToast(null), autoCloseTime);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </ToastContext.Provider>
  );
};
