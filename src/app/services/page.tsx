import { Metadata } from "next";
import ServicesWithFilter from "../../components/servicesWithFilter";
import { serviceMetadata } from "../../lib/metadata/serviceMetaData";
export const metadata: Metadata = {
  ...serviceMetadata,
};
export default function ServicesSection() {
  return (
    <section className="py-6 bg-bg-light">
      <div className="max-w-7xl mx-auto md:px-24 px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-heading  md:text-5xl text-primary tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-color-body-text text-lg md:w-2/3 mx-auto">
            Explore our wide range of advanced hair and skin treatments designed to help you look &
            feel your best.
          </p>
        </div>

        <ServicesWithFilter />
      </div>
    </section>
  );
}
