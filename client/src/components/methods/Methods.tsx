import { Row, Col } from "react-bootstrap";
import { FC } from "react";
import test from "../../assets/online-test.png";
import "./Methods.scss";

const Methods: FC = () => {
  return (
    <section className="bg-light w-100">
      <div className="w-75 container">
        <Row>
          <Col md={12} lg={6} className="d-flex justify-content-center align-items-center">
            <img src={test} alt="test" className="w-100 h-100"></img>
          </Col>
          <Col md={12} lg={6} className="methods flex-column d-flex align-items-start justify-content-center">
            <h2 style={{ fontSize: "3.2rem" }}>
              We provide many methods of testing
            </h2>
            <ul>
              <li className="pt-2">Multiple-choice questions</li>
              <li>Checkbox questions</li>
              <li>Statement matching</li>
              <li>Fill in the blank</li>
              <li>True/False questions</li>
              <li>Short answer questions</li>
              <li>Video questions</li>
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Methods;
