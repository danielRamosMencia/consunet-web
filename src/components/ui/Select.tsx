import React from "react";
import { Option } from "@shared/index";

interface SelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
}) => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <select
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
Select.displayName = "Select";

export default Select;
