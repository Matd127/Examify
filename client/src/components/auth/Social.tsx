import { FC } from "react";
import { BsGoogle, BsApple, BsFacebook } from "react-icons/bs";

interface SocialProps {
  type: string;
}

const Social: FC<SocialProps> = ({ type }) => {
  return (
    <div className="auth__social-login text-center my-5">
      <p className="my-4 auth__social-text">
        Or {type === "login" ? "log in" : "sign up"} with:
      </p>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="btn btn-outline-primary px-5 w-100 rounded-0 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center mx-2">
              <BsGoogle />
            </div>
            <div className="d-flex align-items-center">Google</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="btn btn-outline-primary px-5 w-100 rounded-0 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center mx-2">
              <BsApple />
            </div>
            <div className="d-flex align-items-center">Apple</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="btn btn-outline-primary px-5 w-100 rounded-0 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center mx-2">
              <BsFacebook />
            </div>
            <div className="d-flex align-items-center">Facebook</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
