import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  onClick,
}: ButtonProps) {
  const className =
    variant === "primary" ? "primary-button" : "secondary-button";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}