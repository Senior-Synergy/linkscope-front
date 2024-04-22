import React from "react";

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  type?: "button" | "submit" | "reset" | undefined;
  width?: string;
  height?: string;
  className?: string;
  primary?: boolean;
  disabled?: boolean;
  sizeOverride?: boolean;
  onClick?: () => void;
}

function Button({
  children,
  type = "button",
  className,
  width,
  height,
  primary = false,
  disabled = false,
  sizeOverride = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      // style={{
      //   width: width ? width : "100%",
      //   height: height ? height : "100%",
      // }}
      className={`flex items-center justify-center 
                rounded-md
                transition-all
                ${
                  primary
                    ? disabled
                      ? "text-white border border-gray-300 bg-gray-300 dark:bg-gray-800 dark:text-gray-400"
                      : "text-white border border-primary bg-primary hover:bg-primary-600 hover:border-primary-700"
                    : disabled
                    ? "border border-gray-300 text-gray-300 dark:text-gray-400 bg-white dark:bg-black"
                    : "border border-primary text-primary bg-white dark:bg-black hover:bg-primary-100"
                }
                ${className}
                `}
    >
      {children}
    </button>
  );
}

export default Button;
