import { FC } from "react";

const ForgotPasswordForm: FC = () => {
  return (
    <>
      <h2 className="h2 text-center">Forgotten your password?</h2>
      <p className="text-center mt-3">
        Lost access to your account? Don't worry! Follow the simple steps to{" "}
        <br />
        reset your password and get back to your account in no time."
      </p>
      <div className="form-group">
        <label className="auth__label mt-4" htmlFor="email">
          Email address
        </label>
        <input
          type="email"
          className="form-control mt-2"
          id="email"
          placeholder="Enter your email"
          autoComplete="email"
        />
        <button className="btn btn-primary mt-3 w-100">Send Reset Link</button>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
