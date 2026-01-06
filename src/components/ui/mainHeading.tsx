import React, { FC } from "react";

type Props = {
  title: string;
};

export const MainHeading: FC<Props> = ({ title }) => {
  return (
    <h2 className="font-playfair text-center text-3xl md:text-4xl py-8 text-primary font-heading leading-tight">
      {title}
    </h2>
  );
};
