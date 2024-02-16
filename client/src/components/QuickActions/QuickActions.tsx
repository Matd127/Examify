import React, { FC } from "react";
import { BsPlusCircle } from "react-icons/bs";

const QuickActions: FC = () => {
  return (
    <div className=" mt-5">
      <h2 className="h2 fw-bold mb-4">Quick Actions</h2>

      {/* Component one */}
      <div className="d-flex justify-content-between align-items-center px-3 py-4 mb-2 w-100 border rounded">
        <div className="d-flex justify-content-center ">
          <div className="rounded d-flex justify-content-center align-items-center p-3">
            <BsPlusCircle size={30} />
          </div>
          <div className="ms-3">
            <h3 className="fw-bold">Create your group</h3>
            <p>
              Create group to organize your students and assign work to them
            </p>
          </div>
        </div>
        <div>
          <button className="btn btn-secondary rounded py-2 px-5">
          Get Started
          </button>
        </div>
      </div>

      {/* Component two */}
      <div className="d-flex justify-content-between align-items-center p-3 mb-2 w-100 border rounded">
        <div className="d-flex justify-content-center ">
          <div className="rounded d-flex justify-content-center align-items-center p-3">
            <BsPlusCircle size={30} />
          </div>
          <div className="ms-3">
            <h3 className="fw-bold">Create your exam</h3>
            <p>
              Create group to organize your students and assign work to them
            </p>
          </div>
        </div>
        <div>
          <button className="btn btn-secondary rounded py-2 px-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
