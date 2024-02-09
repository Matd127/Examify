import React, { FC } from "react";
import { BsPlusCircleFill, BsPeopleFill } from "react-icons/bs";

const QuickActions: FC = () => {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="card dashboard-card px-5 py-4">
          <h5 className=" text-primary fs-2">Quick actions</h5>
          <div className="row mt-4">
            <div className="col-2">
              <div className="action-card">
                <p className="d-flex align-items-center">
                  <BsPlusCircleFill className="text-info me-3" /> Add new exam
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="action-card">
                <p>+ Create group</p>
              </div>
            </div>
            <div className="col-2">
              <div className="action-card">
                <p>+ Add new exam</p>
              </div>
            </div>
            <div className="col-2">
              <div className="action-card">
                <p>+ Create group</p>
              </div>
            </div>
            <div className="col-2">
              <div className="action-card">
                <p>+ Add new exam</p>
              </div>
            </div>
            <div className="col-2">
              <div className="action-card">
                <p>+ Create group</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
