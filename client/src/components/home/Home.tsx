import { FC } from "react";
import { Button } from "react-bootstrap";
import "./Home.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import welcome from "../../assets/online-test.png";

const Home: FC = () => {
  return (
    <section className="home" id="home">
      <div className="container w-75 h-100 d-flex text-light justify-content-around align-items-center py-5">
        <Row className="align-items-center py-5">
          <Col md={12} lg={6} className="px-5">
            <h1>Welcome to Examify!</h1>
            <p className="py-3 text-align-left welcome-text">
              The questions on this exam page are carefully crafted to test your
              comprehension and competency in the subject matter, and may range
              from multiple choice, true/false, short answer, essay, or other
              formats.
            </p>
            <p>
              <Button variant="success" className="welcome-text text-light">
                Get Started
              </Button>
            </p>
          </Col>
          <Col md={12} lg={6}>
            <div className="px-5 d-flex flex-center justify-content-center">
              <img src={welcome} alt="welcome-img"></img>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
