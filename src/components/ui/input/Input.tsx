import { UseFormRegisterReturn, FieldError } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "password" | "number";
  register: UseFormRegisterReturn;
  error?: FieldError;
  placeholder?: string;
  defaultValue?: string | number;
  readonly?: boolean;
};

const Input = ({
  id,
  label,
  type = "text",
  register,
  error,
  placeholder,
  defaultValue,
  readonly = false,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        readOnly={readonly}
        defaultValue={defaultValue}
        className={`${
          readonly ? "bg-slate-300" : ""
        } "border border-gray-300 py-2 px-4 rounded focus:outline-blue-500"`}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default Input;
