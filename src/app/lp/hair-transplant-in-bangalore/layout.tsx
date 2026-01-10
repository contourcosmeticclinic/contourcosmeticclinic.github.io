import { GoogleTagManager } from "@next/third-parties/google";

export default function HairTransplantLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = process.env.NEXT_PUBLIC_LP_GTM_ID;
  return (
    <>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      {children}
    </>
  );
}
