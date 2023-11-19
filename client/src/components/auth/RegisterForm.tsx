import { FC } from "react";
import Social from "./Social";

interface RegisterProps {
  setOption: (value: string) => void;
}

const RegisterForm: FC<RegisterProps> = ({ setOption }) => {
  return (
    <>
      <h2 className="h2 text-center">Sign Up Free</h2>
      <p className="text-center">No hidden charges!</p>

      <div className="form-group">
        <label className="auth__label mt-4" htmlFor="firstName">
          First Name
        </label>
        <input
          type="email"
          className="form-control mt-2"
          id="firstName"
          autoComplete="name"
        />
      </div>

      <div className="form-group">
        <label className="auth__label mt-4" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="email"
          className="form-control mt-2"
          id="lastName"
          autoComplete="name"
        />
      </div>

      <div className="form-group">
        <label className="auth__label mt-4" htmlFor="email">
          Email address
        </label>
        <input
          type="email"
          className="form-control mt-2"
          id="email"
          autoComplete="email"
        />
      </div>

      <div className="form-group mb-4">
        <label className="auth__label mt-4" htmlFor="password">
          Password
        </label>
        <input type="password" className="form-control mt-2" id="password" />
      </div>

      <p className="auth__social-text">Select account type:</p>
      <div className="form-check form-check-inline mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Student
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Teacher
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Employer
        </label>
      </div>

      <div className="btn btn-primary w-100">Create account</div>

      <Social type="register" />
      <div className="mt-3">
        <p
          className="auth__social-text text-center"
          onClick={() => setOption("login")}
        >
          Already have an account?
        </p>
      </div>
    </>
  );
};

export default RegisterForm;