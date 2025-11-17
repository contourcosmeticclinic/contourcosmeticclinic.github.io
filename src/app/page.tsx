import WhyChooseClinic from "../components/home/why-choose-us";
import Hero from "@/components/home/hero-section";
import { ReviewCards } from "../components/home/review";
import ClientResults from "../components/home/client-results";
import { clientResultImages } from "../lib/constant";
import ConnectForm from "../components/common/connect-form";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseClinic />
      <ReviewCards />
      <ClientResults images={clientResultImages} />
      <ConnectForm />
    </>
  );
}
