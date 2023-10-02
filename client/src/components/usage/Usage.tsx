import { FC } from "react";
import { useState } from "react";
import UsageItems from "./UsageItems";

const Usage: FC = () => {
  const [active, setActive] = useState("schools");

  return (
    <section id="usage" className="section-usage py-5 container w-75">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <h2 className="h2">One application many uses</h2>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center py-5">
          <div
            aria-label="Basic example"
            className="btn-group d-flex flex-column flex-sm-row w-100"
          >
            <button
              className={`btn btn-outline-primary section-usage__option p-3 option ${
                active === "schools" ? "active" : ""
              } `}
              onClick={() => setActive("schools")}
            >
              Schools
            </button>
            <button
              className={`btn btn-outline-primary section-usage__option p-3 option ${
                active === "universities" ? "active" : ""
              } `}
              onClick={() => setActive("universities")}
            >
              Universities
            </button>
            <button
              className={`btn btn-outline-primary section-usage__option p-3 option ${
                active === "companies" ? "active" : ""
              }`}
              onClick={() => setActive("companies")}
            >
              Companies
            </button>
          </div>
        </div>
      </div>
      <div className="row py-5">
        <UsageItems name={active} />
      </div>
    </section>
  );
};

export default Usage;