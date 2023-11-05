import { FC } from "react";
import Social from "./Social";

interface Options {
  setOption: (value: string) => void;
}

const LoginForm: FC<Options> = ({ setOption }) => {
  return (
    <>
      <h2 className="h2 text-center">Welcome back</h2>
      <p className="text-center">Please log in to continue</p>
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

      <div className="form-group">
        <label className="auth__label mt-3" htmlFor="password">
          Password
        </label>
        <input type="password" className="form-control mt-2" id="password" />
      </div>
      <div className="row my-4">
        <div className="col-6">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="rememberCheck"
            />
            <label className="form-check-label" htmlFor="rememberCheck">
              Remember me
            </label>
          </div>
        </div>
        <div
          className="col-6 d-flex justify-content-end"
          onClick={() => setOption("forgotPassword")}
        >
          Forgot password?
        </div>
      </div>
      <div className="btn btn-primary w-100">Log in</div>
      <Social type="login" />
      <div className="mt-3">
        <p
          className="auth__social-text text-center"
          onClick={() => setOption("register")}
        >
          No account yet? Sign Up
        </p>
      </div>
    </>
  );
};

export default LoginForm;
