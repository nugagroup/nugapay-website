'use client'
import { LoadingIndicator } from "@/app/assets/svg";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  variant?: "text" | "outlined" | "primary" | "white" | "dark" | "light";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  onClick?: () => void;
  onBlur?: () => void;
  loading?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  fullWidth = false,
  href,
  variant = "outlined",
  type = "button",
  ariaLabel,
  onClick,
  onBlur,
  loading = false,
}) => {
  const variantStyles = {
    text: "border-none outline-transparent focus:outline-black border-transparent bg-transparent",
    primary:
      "border outline-transparent focus:outline-black hover:scale-90 active-scale-100 disabled:border-disabled bg-primary disabled:bg-disabled disabled:cursor-not-allowed text-white",
    white:
      "border outline-transparent focus:outline-black border-primary hover:border-primary/80 disabled:border-disabled bg-white disabled:bg-disabled disabled:cursor-not-allowed text-primary",
    dark: "border outline-transparent focus:outline-black border-dark hover:border-dark/80 disabled:border-disabled bg-dark disabled:bg-disabled disabled:cursor-not-allowed text-white",
    outlined:
      "border-[1.6px] outline-transparent focus:outline-primary border-white hover:scale-90 active-scale-100 text-white bg-transparent",
    light: "bg-primary/10 text-primary hover:scale-90 active-scale-100 disabled:cursor-not-allowed"
  };
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
      className={`${className} ${fullWidth ? "w-full" : "w-fit"} ${
        variantStyles[variant]
      } px-[1.125rem] rounded-lg transition-all flex justify-center items-center py-3 gap-2 min-h-[50px] font-[family-name:var(--font-gilroy-regular)]`}
    >
      {href ? (
        <Link href={href}>{loading ? <LoadingIndicator /> : children}</Link>
      ) : (
        <>{loading ? <LoadingIndicator /> : children}</>
      )}
    </button>
  );
};
