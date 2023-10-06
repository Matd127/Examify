import { FC } from "react";
import testImg from "../../assets/online-test.png";
import { BsListCheck } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";
import { BsOption } from "react-icons/bs";
import { BsFillMenuAppFill } from "react-icons/bs";
import { BsUiChecksGrid } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { BsWebcam } from "react-icons/bs";

const Methods: FC = () => {
  return (
    <section id="methods" className="w-100">
      <div className="w-75 container">
        <div className="row">
          <div className="cold-md-12 col-lg-4 d-flex justify-content-center align-items-center">
            <img src={testImg} alt="test" className="w-100 h-100"></img>
          </div>
          <div className="section-methods col-md-12 col-lg-8 flex-column d-flex align-items-start justify-content-center">
            <h2 className="h2">We provide many methods of testing</h2>
            <div className="row mt-5 w-100">
              <div className="col-md-4">
                <div className="methods-card">
                  <div className="methods-card__icon">
                    <BsListCheck size={20} />
                  </div>
                  <p className="methods-card__title">
                    Multiple-choice questions
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="methods-card">
                  <div className="methods-card__icon">
                    <BsCheck2Square size={20} />
                  </div>
                  <p className="methods-card__title">Checkbox questions</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="methods-card">
                  <div className="methods-card__icon">
                    <BsOption size={20} />
                  </div>
                  <p className="methods-card__title">Statement matching</p>
                </div>
              </div>

              <div className="col-md-4 mt-4">
                <div className="methods-card">
                  <div className="methods-card__icon">
                    <BsFillMenuAppFill size={20} />
                  </div>
                  <p className="methods-card__title">Fill in the blank</p>
                </div>
              </div>

              <div className="col-md-4 mt-4">
                <div className="methods-card">
                  <div className="methods-card__icon">
                    <BsUiChecksGrid size={20} />
                  </div>
                  <p className="methods-card__title">True/False questions</p>
                </div>
              </div>

              <div className="col-md-4 mt-4">
                <div className="methods-card">
                  <div className="methods-card__icon">
                    <BsPencilSquare size={20} />
                  </div>
                  <p className="methods-card__title">Answer questions</p>
                </div>
              </div>

              <div className="col-md-4 mt-4">
                <div className="methods-card">
                  <div className="methods-card__icon">
                    <BsFillMicFill size={20} />
                  </div>
                  <p className="methods-card__title">Voice questions</p>
                </div>
              </div>

              <div className="col-md-4 mt-4">
                <div className="methods-card">
                  <div className="methods-card__icon">
                    <BsWebcam size={20} />
                  </div>
                  <p className="methods-card__title">Video questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;
