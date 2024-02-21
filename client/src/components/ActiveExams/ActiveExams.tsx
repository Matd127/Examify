import React, { FC } from "react";

const ActiveExams: FC = () => {
  return (
    <div className="mt-5 ">
      <h2 className="h2 fw-bold">Active exams</h2>
      <div className="table-responsive-md">
        <table className="table table-responsive-sm w-100 fs-3 border mt-4">
          <thead>
            <tr className="p-3">
              <th scope="col" className="p-4">
                Title
              </th>
              <th scope="col" className="p-4">
                Due Date
              </th>
              <th scope="col" className="p-4">
                Duration
              </th>
              <th scope="col" className="p-4">
                Participants
              </th>
              <th scope="col" className="p-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="p-4">
                1
              </th>
              <td className="p-4">Mark</td>
              <td className="p-4">25 minutes</td>
              <td className="p-4">75 Participants</td>
              <td className="p-4 fw-bolder">Preview | Edit | Delete</td>
            </tr>
            <tr>
              <th scope="row" className="p-4">
                2
              </th>
              <td className="p-4">Jacob</td>
              <td className="p-4">3 hours</td>
              <td className="p-4">-</td>
              <td className="p-4 fw-bolder">Preview | Edit | Delete</td>
            </tr>
            <tr>
              <th scope="row" className="p-4">
                3
              </th>
              <td className="p-4">Larry the Bird</td>
              <td className="p-4">90 minutes</td>
              <td className="p-4">10 Participants</td>
              <td className="p-4 fw-bolder">Preview | Edit | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveExams;
