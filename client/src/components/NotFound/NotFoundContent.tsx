import React, { FC } from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { Link } from "react-router-dom";

const NotFoundContent: FC = () => {
  return (
    <header className="not-found my-5 py-5 d-flex flex-column align-items-center justify-content-center">
      <BsRocketTakeoff className="text-secondary" size={120} />
      <h1 className="mt-5 not-found__title">404</h1>
      <h2 className="mt-2 not-found__subtitle">Page Not Found</h2>
      <p className="container text-center mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
        consectetur ipsa? Corrupti facere cum, dolor expedita voluptatum aut est
        ut magni? Consectetur, quisquam eius? Quam repudiandae quaerat corrupti
        nihil nostrum.
      </p>
      <Link className="btn btn-outline-primary fs-3 py-3 px-5 mt-5" to="/">
        Back to home
      </Link>
    </header>
  );
};

export default NotFoundContent;
