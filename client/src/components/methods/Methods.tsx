import { FC } from "react";
import testImg from "../../assets/online-test.png";
import { methodsList } from "./methodsList";

const Methods: FC = () => {
  return (
    <section id="methods" className="w-100">
      <div className="container py-5">
        <div className="row">
          <div className="cold-md-12 col-lg-4 d-flex justify-content-center align-items-center">
            <img src={testImg} alt="test" className="w-100 h-100"></img>
          </div>
          <div className="section-methods col-md-12 col-lg-8 flex-column d-flex align-items-start justify-content-center">
            <h2 className="h2">We provide many methods of testing</h2>
            <div className="row mt-2 w-100">
              {methodsList.map((method, index) => (
                <div className="col-md-6 xl-4" key={index}>
                  <div className="methods-card mt-4">
                    <div className="methods-card__icon">{method.icon}</div>
                    <p className="methods-card__title">{method.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;
