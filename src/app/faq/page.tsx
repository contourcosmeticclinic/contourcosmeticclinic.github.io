import React from "react";
import Faqs from "../../components/home/faqs";
import { Metadata } from "next";
import { faqMetaData } from "../../lib/metadata/faqMetaData";

export const metadata: Metadata = {
  ...faqMetaData,
};
const FaqPage = () => {
  return <Faqs />;
};

export default FaqPage;
