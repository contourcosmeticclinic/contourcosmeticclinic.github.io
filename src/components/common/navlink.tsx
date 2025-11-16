"use client";

import clsx from "clsx";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        `
          relative inline-block
          after:absolute after:left-0 after:-bottom-1 after:h-0.5
          after:w-0 after:bg-[#2E4F4F]
          after:transition-all after:duration-300
          hover:after:w-full
        `,
        className
      )}
    >
      {children}
    </Link>
  );
}
