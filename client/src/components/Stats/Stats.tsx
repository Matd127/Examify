import { FC } from "react";

const Stats: FC = () => {
  return (
    <div className="card dashboard-card d-flex justify-content-center h-100">
      <div className="row w-100 flex-wrap">
        <div className="col-3 h-100">
          <div className="p-3 d-flex flex-column align-items-center justify-content-center">
            <h5 className="fs-2">Exams</h5>
            <p className="fs-1 text-primary">10</p>
          </div>
        </div>
        <div className="col-3 h-100">
          <div className="p-3 d-flex align-items-center flex-column justify-content-center">
            <h5 className="fs-2 ">Questions</h5>
            <p className="fs-1 text-primary">50</p>
          </div>
        </div>
        <div className="col-3 h-100">
          <div className="p-3 d-flex align-items-center flex-column justify-content-center">
            <h5 className="fs-2">Groups</h5>
            <p className="fs-1 text-primary">3</p>
          </div>
        </div>
        <div className="col-3 h-100">
          <div className="p-3 d-flex align-items-center flex-column justify-content-center">
            <h5 className="fs-2">Something</h5>
            <p className="fs-1 text-primary">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
