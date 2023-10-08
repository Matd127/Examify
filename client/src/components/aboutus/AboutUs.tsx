import { FC } from "react";
import { aboutList } from "./aboutList";
import { AboutIcon } from "./AboutIcon";

const AboutUs: FC = () => {
  return (
    <section className="container py-5 my-5" id="aboutus">
      <div className="row">
        {aboutList.map((about) => (
          <div
            key={about.id}
            className="about-card col-xs-12 col-md-6 col-lg-3 text-center py-md-0 py-3"
          >
            <AboutIcon icon={about.icon} />
            <h3 className="m-3 about-card__title">{about.title}</h3>
            <div className="px-5">
              <p className="about-card__text">{about.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
