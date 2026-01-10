import { GoogleTagManager } from "@next/third-parties/google";

export default function HairTransplantLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleTagManager gtmId="AW-17793038451" />
      {children}
    </>
  );
}
