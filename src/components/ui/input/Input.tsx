import { UseFormRegisterReturn, FieldError } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "password" | "number";
  register: UseFormRegisterReturn;
  error?: FieldError;
  placeholder?: string;
  value?: string | number;
};

const Input = ({
  id,
  label,
  type = "text",
  register,
  error,
  placeholder,
  value,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        value={value}
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded focus:outline-blue-500"
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default Input;
