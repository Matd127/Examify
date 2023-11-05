import { FC, useState } from "react";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Auth: FC = () => {
  const [option, setOption] = useState("login");
  return (
    <section className="d-flex min-vh-100 justify-content-center align-items-center">
      <form className="auth__box">
        {option === "login" && <LoginForm setOption={setOption}/>}
        {option === "forgotPassword" && <ForgotPasswordForm />}
        {option === "register" && <RegisterForm setOption={setOption} />}
      </form>
    </section>
  );
};

export default Auth;
