import React, { FC } from "react";

const ActiveExams: FC = () => {
  return (
    <div className="mt-5">
      <h2 className="h2 fw-bold">Active exams</h2>
      <table className="table w-100 fs-3 border rounded-3 mt-4">
        <thead >
          <tr className="p-3">
            <th scope="col" className="p-4">
              Title
            </th>
            <th scope="col" className="p-4">Due Date</th>
            <th scope="col" className="p-4">Duration</th>
            <th scope="col" className="p-4">Students</th>
            <th scope="col" className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="p-4">1</th>
            <td   className="p-4">Mark</td>
            <td  className="p-4">Otto</td>
            <td  className="p-4">@mdo</td>
          </tr>
          <tr>
            <th scope="row"  className="p-4">2</th>
            <td  className="p-4">Jacob</td>
            <td  className="p-4">Thornton</td>
            <td  className="p-4">@fat</td>
          </tr>
          <tr>
            <th scope="row"  className="p-4">3</th>
            <td colSpan={2}  className="p-4">Larry the Bird</td>
            <td  className="p-4">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActiveExams;
