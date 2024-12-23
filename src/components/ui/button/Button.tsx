type ButtonVariant = "primary" | "secondary" | "danger" | "cancel";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};

const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  const defaultClasses =
    "py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary:
      "bg-green-500 hover:bg-green-700 text-white focus:ring-green-500",
    danger: "bg-red-500 hover:bg-red-700 text-white focus:ring-red-500",
    cancel: "bg-gray-500 hover:bg-gray-700 text-white focus:ring-gray-500",
  };

  const classes = `${defaultClasses} ${variantClasses[variant]}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${classes} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
