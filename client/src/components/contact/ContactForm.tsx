import React, { FC } from "react";
import ContactDetails from "./ContactDetails";
import ContactInfo from "./ContactInfo";

const ContactForm: FC = () => {
  return (
    <section className="d-flex justify-content-center py-5">
      <ContactDetails />
      <ContactInfo />
    </section>
  );
};
export default ContactForm;
