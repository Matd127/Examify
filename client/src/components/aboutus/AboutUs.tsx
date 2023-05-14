import { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillDollarCircle } from "react-icons/ai";
import "./AboutUs.scss";
import { BsBrowserChrome } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";


const AboutUs: FC = () => {
  return (
    <section className="aboutus container w-75 py-5" id="aboutus">
        <Row>
          <Col xs={12} md={6} lg={3} className="text-center">
            <svg className="icon" width="60" height="60" viewBox="0 0 60 60">
              <defs>
                <linearGradient id="grad" x1="25%" y1="0%" x2="100%" y2="75%">
                  <stop offset="09%" stopColor="rgba(35, 58, 175, 1)" />
                  <stop offset="85%" stopColor="rgba(132, 42, 199, 1)" />
                </linearGradient>
              </defs>
              <AiFillDollarCircle fill="url(#grad)" />
            </svg>
            <h3 className="m-3 about-title">It's free!</h3>
            <div className="px-5">
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                provident voluptas explicabo quas. Ratione, nostrum?
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} className="text-center">
            <svg className="icon" width="60" height="60" viewBox="0 0 60 60">
              <defs>
                <linearGradient id="grad" x1="25%" y1="0%" x2="100%" y2="75%">
                  <stop offset="09%" stopColor="rgba(35, 58, 175, 1)" />
                  <stop offset="85%" stopColor="rgba(132, 42, 199, 1)" />
                </linearGradient>
              </defs>
              <BsFillEmojiSmileFill fill="url(#grad)" />
            </svg>
            <h3 className="m-3 about-title">It's easy to use!</h3>
            <div className="px-5">
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                provident voluptas explicabo quas. Ratione, nostrum?
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} className="text-center">
            <svg className="icon" width="60" height="60" viewBox="0 0 60 60">
              <defs>
                <linearGradient id="grad" x1="25%" y1="0%" x2="100%" y2="75%">
                  <stop offset="09%" stopColor="rgba(35, 58, 175, 1)" />
                  <stop offset="85%" stopColor="rgba(132, 42, 199, 1)" />
                </linearGradient>
              </defs>
              <BsBrowserChrome fill="url(#grad)" />
            </svg>
            <h3 className="m-3 about-title">Supports all browsers</h3>
            <div className="px-5">
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                provident voluptas explicabo quas. Ratione, nostrum?
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} className="text-center">
            <svg className="icon" width="60" height="60" viewBox="0 0 60 60">
              <defs>
                <linearGradient id="grad" x1="25%" y1="0%" x2="100%" y2="75%">
                  <stop offset="09%" stopColor="rgba(35, 58, 175, 1)" />
                  <stop offset="85%" stopColor="rgba(132, 42, 199, 1)" />
                </linearGradient>
              </defs>
              <BsFillWrenchAdjustableCircleFill fill="url(#grad)" />
            </svg>
            <h3 className="m-3 about-title">Customise as you like</h3>
            <div className="px-5">
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                provident voluptas explicabo quas. Ratione, nostrum?
              </p>
            </div>
          </Col>
        </Row>
    </section>
  );
};

export default AboutUs;
