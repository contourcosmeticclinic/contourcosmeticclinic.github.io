import React from "react";
import ConnectForm from "../../components/common/connect-form";
import { Metadata } from "next";
import { contactUsMetaData } from "../../lib/metadata/contactusMetaData";

export const metadata: Metadata = {
  ...contactUsMetaData,
};
const ContactPage = () => {
  return (
    <div>
      <ConnectForm />
    </div>
  );
};

export default ContactPage;
