import { FC } from "react";
import testImg from "../../assets/online-test.png";

const Methods: FC = () => {
  return (
    <section id="methods" className="bg-light w-100">
      <div className="w-75 container">
        <div className="row">
          <div className="cold-md-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img src={testImg} alt="test" className="w-100 h-100"></img>
          </div>
          <div className="section-methods col-md-12 col-lg-6 flex-column d-flex align-items-start justify-content-center">
            <h2 className="h2">We provide many methods of testing</h2>
            <ul>
              <li className="pt-2">Multiple-choice questions</li>
              <li>Checkbox questions</li>
              <li>Statement matching</li>
              <li>Fill in the blank</li>
              <li>True/False questions</li>
              <li>Short answer questions</li>
              <li>Video questions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;
