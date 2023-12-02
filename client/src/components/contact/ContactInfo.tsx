import { FC } from "react";
import { BsGeoAlt, BsTelephone, BsSend } from "react-icons/bs";

const infoList = [
  {
    type: "Address",
    value: "Random Address",
    icon: <BsGeoAlt />,
  },
  {
    type: "Telephone",
    value: "+00 000 000 000",
    icon: <BsTelephone />,
  },
  {
    type: "Email",
    value: "someemail@test.com",
    icon: <BsSend />,
  },
];
const ContactInfo: FC = () => {
  return (
    <div className="form bg-primary border-0 text-light">
      <h2 className="text-start py-3 form__title">Contact us</h2>
      <div className="mt-5">
        {infoList.map((info, i) => (
          <div key={i} className="mt-4 d-flex align-items-center">
            <div className="rounded-icon">{info.icon}</div>
            <span className="fw-bold ms-4">{info.type}: </span>{info.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
