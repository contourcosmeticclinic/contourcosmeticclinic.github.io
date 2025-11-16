"use client";

import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles = {
  primary: "bg-primary text-white hover:bg-forest-light transition", // uses utilities above
  secondary: "bg-beige text-forest hover:bg-beige-dark transition",
  outline:
    "border border-forest text-forest hover:bg-forest hover:text-white transition",
  ghost: "text-forest hover:bg-forest/10 transition",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={loading || rest.disabled}
      className={clsx(
        "font-normal cursor-pointer flex items-center justify-center gap-2",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        (loading || rest.disabled) && "opacity-60 cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {loading && (
        <span className="animate-spin border-2 border-t-transparent border-white rounded-full w-4 h-4" />
      )}
      {children}
    </button>
  );
}
