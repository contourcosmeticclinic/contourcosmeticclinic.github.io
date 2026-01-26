import WhyChooseClinic from "../components/home/why-choose-us";
import Hero from "@/components/home/hero-section";
import { ReviewCards } from "../components/home/review";
import ConnectForm from "../components/common/connect-form";
import Faqs from "../components/home/faqs";
import SocialFollowBanner from "../components/common/socialHighlights";
import StatsCounter from "../components/lp/hair-transplant/statsCounter";
import { BeforeAfterResult } from "../components/lp/hair-transplant/beforeAfterResults";
import { DoctorsHomeSection } from "../components/home/doctors";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseClinic />
      <StatsCounter />
      <ReviewCards />
      <BeforeAfterResult isReelGalleryEnabled={false} bookNowButton={false} />
      {/* <ClientResults images={clientResultImages} /> */}
      <DoctorsHomeSection />
      <Faqs />

      <SocialFollowBanner />
      <ConnectForm />
    </>
  );
}
