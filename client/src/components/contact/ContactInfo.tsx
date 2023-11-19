import React, { FC } from "react";
import { BsGeoAlt, BsTelephone, BsSend } from "react-icons/bs";

const ContactInfo: FC = () => {
  return (
    <div className="form bg-primary border-0 text-light ">
      <h2 className="text-start py-3">Contact us</h2>
      <div className="mt-5">
        <div>
          <BsGeoAlt /> <span className="fw-bold">Address:</span> Random address
        </div>
        <div>
          <BsTelephone /> <span className="fw-bold">Phone:</span> Random address
        </div>
        <div>
          <BsSend /> <span className="fw-bold">Email:</span> Email@test.pl
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
