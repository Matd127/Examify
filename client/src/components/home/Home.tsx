import { FC } from "react";
import { Button } from "react-bootstrap";
import "./Home.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import writing from '../../assets/writing-exam.png';

const Home: FC = () => {
  return (
    <section className="home" id="home">
      <div className="container w-75 h-100 d-flex text-light justify-content-around align-items-center py-5 ">
        <Row className="align-items-center py-5">
          <Col md={12} lg={6} className="px-5">
            <h1 className="welcome-title">Welcome to Examify!</h1>
            <p className="py-3 text-align-left welcome-text">
              The questions on this exam page are carefully crafted to test your
              comprehension and competency in the subject matter, and may range
              from multiple choice, true/false, short answer, essay, or other
              formats.
            </p>
            <p>
              <Button variant="success" className="welcome-button text-light">
                Get Started
              </Button>
            </p>
          </Col>
          <Col md={12} lg={6}>
            <div className="d-flex flex-center justify-content-center">
              <img src={writing} className="w-100" alt="welcome-img"></img>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
