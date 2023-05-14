import { FC } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";
import "./Usage.scss";
import UsageItems from "./UsageItems";

const Usage: FC = () => {
  const [active, setActive] = useState("schools");

  return (
    <section id="usage" className="usage py-5 container w-75">
      <Row>
        <Col md={12} className="d-flex justify-content-center">
          <h2 className="usage-title">One application many uses</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center py-5">
          <ButtonGroup aria-label="Basic example" className="w-50">
            <Button
              className={`${active === "schools" ? "active" : ""} p-3 option`}
              variant="outline-primary"
              onClick={() => setActive("schools")}
            >
              Schools
            </Button>
            <Button
              className={`${
                active === "universities" ? "active" : ""
              } p-3 option`}
              variant="outline-primary"
              onClick={() => setActive("universities")}
            >
              Universities
            </Button>
            <Button
              className={`${active === "companies" ? "active" : ""} p-3 option`}
              variant="outline-primary"
              onClick={() => setActive("companies")}
            >
              Companies
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="py-5">
        <UsageItems name = {active}/>
      </Row>
    </section>
  );
};

export default Usage;
