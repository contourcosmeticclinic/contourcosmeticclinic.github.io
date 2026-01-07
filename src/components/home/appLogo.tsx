import React, { FC } from "react";
import SlideDown from "../animations/slide-down";
import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
};
const AppLogo: FC<Props> = ({ href }) => {
  return (
    <SlideDown delay={0.1}>
      <Link
        href={href || "/"}
        className="text-2xl flex items-center font-heading text-forest font-semibold"
      >
        <Image
          src="/images/brand-logo.png"
          alt="Clinic Logo"
          width={56}
          height={56}
          className="object-contain"
        />
        <Image
          src="/images/brand-text.png"
          alt="Clinic Text Logo"
          width={120}
          height={40}
          className="object-contain mt-1"
        />
      </Link>
    </SlideDown>
  );
};

export default AppLogo;
