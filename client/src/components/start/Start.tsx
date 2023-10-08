import { FC } from "react";
import devices from "../../assets/devices.png";

const Start: FC = () => {
  return (
    <section className="container py-5 my-5">
      <div className="row  align-items-center">
        <div className="col-md-6 ">
          <h2 className="h2">
            Create your <span className="text-primary">first</span> online test!
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            eaque? Cupiditate neque, laboriosam quam accusantium eius quas
            maiores dolores deleniti illo iusto hic obcaecati recusandae sit.
            Sint, ab architecto! Fuga.
          </p>
          <div className="mt-5">
            <button className="btn fs-2 p-3 btn-outline-primary">
              Create account
            </button>
            <button className="btn mx-3 p-3 fs-2 btn-outline-secondary">
              Find out more
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={devices} className=" w-75" alt="placeholder" />
        </div>
      </div>
    </section>
  );
};

export default Start;
