import { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer: FC = () => {
  return (
    <footer className="footer py-5">
      <div className="container p-5">
        <div className="row py-5">
          <div className="col-md-3 d-flex align-items-center footer__title fw-bold">
            Examify
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-between">
            <a href="/" className="footer__link">
              Home
            </a>
            <a href="/" className="footer__link">
              About
            </a>
            <a href="/" className="footer__link">
              Contact Us
            </a>
            <a href="/" className="footer__link">
              Terms/Privacy
            </a>
            <a href="/" className="footer__link">
              Blog
            </a>
            <a href="/" className="footer__link">
              Register
            </a>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-end">
            <BsGithub size={30} />
            <BsLinkedin size={30} className="ms-3"/>
          </div>
        </div>

        <div className="row  footer__copyright pt-5">
          <div className="col d-flex justify-content-center">
            Copyright &copy; 2023 Examify | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
