import { FC } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import "./AboutUs.scss";
import { BsBrowserChrome } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";

const infoList = [
  {
    id: 0,
    title: "It's free!",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum provident voluptas explicabo quas. Ratione, nostrum?",
    icon: <AiFillDollarCircle fill="url(#grad)" />,
  },
  {
    id: 1,
    title: "It's easy to use!",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum provident voluptas explicabo quas. Ratione, nostrum?",
    icon: <BsFillEmojiSmileFill fill="url(#grad)" />,
  },
  {
    id: 2,
    title: "Supports all browsers",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum provident voluptas explicabo quas. Ratione, nostrum?",
    icon: <BsBrowserChrome fill="url(#grad)" />,
  },
  {
    id: 3,
    title: "Customise as you like",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum  provident voluptas explicabo quas. Ratione, nostrum?",
    icon: <BsFillWrenchAdjustableCircleFill fill="url(#grad)" />,
  },
];

const AboutUs: FC = () => {
  return (
    <section className="aboutus container w-75 py-5" id="aboutus">
      <div className="row">
        {infoList.map((info) => (
          <div
            key={info.id}
            className="col-xs-12 col-md-6 col-lg-3 text-center"
          >
            <svg className="icon" width="60" height="60" viewBox="0 0 60 60">
              <defs>
                <linearGradient id="grad" x1="25%" y1="0%" x2="100%" y2="75%">
                  <stop offset="09%" stopColor="rgba(35, 58, 175, 1)" />
                  <stop offset="85%" stopColor="rgba(132, 42, 199, 1)" />
                </linearGradient>
              </defs>
              {info.icon}
            </svg>
            <h3 className="m-3 about-title">{info.title}</h3>
            <div className="px-5">
              <p className="about-text">{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;