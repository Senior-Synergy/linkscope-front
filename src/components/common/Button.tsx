import React from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({
  title,
  type = "button",
  primary = false,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center 
                h-full w-full rounded-lg
                transition-all
                border
                ${disabled ? "border-gray-300" : "border-primary"} 
                ${
                  primary
                    ? disabled
                      ? "text-white bg-gray-300"
                      : "text-white bg-primary hover:bg-primary-600 hover:border-primary-700"
                    : disabled
                    ? "text-gray-300 bg-white"
                    : "text-primary bg-white hover:bg-primary-100"
                }`}
    >
      {title}
    </button>
  );
}

export default Button;
