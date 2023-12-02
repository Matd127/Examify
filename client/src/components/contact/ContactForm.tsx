import React, { FC } from "react";
import ContactDetails from "./ContactDetails";
import ContactInfo from "./ContactInfo";

const ContactForm: FC = () => {
  return (
    <section className="d-flex flex-wrap flex-md-nowrap justify-content-center py-0 py-lg-5">
      <ContactDetails />
      <ContactInfo />
    </section>
  );
};
export default ContactForm;
