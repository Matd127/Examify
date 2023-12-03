import { FC } from "react";
import { aboutList } from "./aboutList";
import { AboutIcon } from "./AboutIcon";

const AboutUs: FC = () => {
  return (
    <section className="container py-6" id="aboutus">
      <div className="row">
        {aboutList.map((about) => (
          <div
            key={about.id}
            className="col-xs-12 col-md-6 col-lg-3 text-center py-md-0 py-3"
          >
            <AboutIcon icon={about.icon} />
            <h3 className="h3 m-3 fw-bolder">{about.title}</h3>
            <div className="px-5">
              <p>{about.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
