import { FC, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import writing from "../../assets/writing-exam.png";

const Hero: FC = () => {
  const [animate, setAnimate] = useState(false);
  const { ref: heroRef, inView: heroRefIsVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (heroRefIsVisible) {
      setAnimate(true);
    }
  }, [heroRefIsVisible, animate]);

  return (
    <header className="hero" id="hero">
      <div
        className="container h-100 d-flex text-light justify-content-around align-items-center py-5"
        ref={heroRef}
      >
        <div
          className={`row align-items-center py-5 ${animate ? "animated" : ""}`}
        >
          <div className="col-md-12 col-lg-6 px-5">
            <h1 className="hero__title">Welcome to Examify!</h1>
            <p className="py-3 text-align-left hero__text">
              Are you tired of traditional, time-consuming testing methods? Look
              no further! Examify is here to revolutionize your testing
              experience. Whether you're an educator, a trainer, or a business
              professional, our cutting-edge online testing platform simplifies
              the entire process.
            </p>
            <p>
              <button className="btn btn-success hero__button text-light px-5">
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
