import React, { FC } from "react";
import Button from "./button";
import clsx from "clsx";

type Props = { children: React.ReactNode; onClick?: () => void; className?: string };

const NavbarButton: FC<Props> = ({ children, onClick, className }) => {
  return (
    <Button variant="ghost" onClick={onClick} className={clsx(className, "text-sm uppercase")}>
      {children}
    </Button>
  );
};

export default NavbarButton;
