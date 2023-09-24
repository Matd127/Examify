import { FC } from "react";
import "./Hero.scss";
import writing from "../../assets/writing-exam.png";

const Hero: FC = () => {
  return (
    <header className="home" id="home">
      <div className="container w-75 h-100 d-flex text-light justify-content-around align-items-center py-5 ">
        <div className="row align-items-center py-5">
          <div className="col-md-12 col-lg-6 px-5">
            <h1 className="welcome-title">Welcome to Examify!</h1>
            <p className="py-3 text-align-left welcome-text">
              The questions on this exam page are carefully crafted to test your
              comprehension and competency in the subject matter, and may range
              from multiple choice, true/false, short answer, essay, or other
              formats.
            </p>
            <p>
              <button className="btn btn-success welcome-button text-light px-5">
                Get Started
              </button>
            </p>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="d-flex flex-center justify-content-center">
              <img src={writing} className="w-100" alt="welcome-img"></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
