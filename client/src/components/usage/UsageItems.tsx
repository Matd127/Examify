import { FC } from "react";
import { TfiWrite } from "react-icons/tfi";
import { TfiPencilAlt } from "react-icons/tfi";
import { TfiHome } from "react-icons/tfi";

interface institutions {
  name: string;
}

const UsageItems: FC<institutions> = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card usage-card">
          <div className="card-body p-5">
            <TfiWrite className="usage-card__icon" />
            <h5 className="usage-card__title pt-4">Tests</h5>
            <p className="usage-card__text py-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a className="usage-card__link" href="/home">
              Card Link
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card usage-card">
          <div className="card-body p-5">
            <TfiPencilAlt className="usage-card__icon" />
            <h5 className="usage-card__title pt-4">Exams</h5>
            <p className="usage-card__text py-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a className="usage-card__link" href="/home">
              Card Link
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card usage-card">
          <div className="card-body p-5">
            <TfiHome className="usage-card__icon" />
            <h5 className="usage-card__title pt-4">Homework</h5>
            <p className="usage-card__text py-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a className="usage-card__link" href="/home">
              Card Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsageItems;
