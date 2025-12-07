import WhyChooseClinic from "../components/home/why-choose-us";
import Hero from "@/components/home/hero-section";
import { ReviewCards } from "../components/home/review";
import ConnectForm from "../components/common/connect-form";
import Faqs from "../components/home/faqs";
import SocialFollowBanner from "../components/common/socialHighlights";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseClinic />
      <ReviewCards />
      {/* <ClientResults images={clientResultImages} /> */}
      <Faqs />
      <SocialFollowBanner />
      <ConnectForm />
    </>
  );
}
