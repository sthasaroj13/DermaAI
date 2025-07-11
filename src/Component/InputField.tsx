import React from "react";

interface InputProps {
  type: "email" | "password" | "radio" | "checkbox" | "text";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value?: string;
  placeholder?: string;
  className?: string;
  name?: string;
}

const InputField: React.FC<InputProps> = ({
  type,
  onChange,
  onClick,
  value,
  placeholder,
  className,
  name,
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      onClick={onClick}
      value={value}
      placeholder={placeholder}
      className={`border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
      name={name}
    />
  );
};

export default InputField;
