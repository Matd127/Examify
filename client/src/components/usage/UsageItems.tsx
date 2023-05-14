import { FC } from "react";
import { Card, Col } from "react-bootstrap";
import {TfiWrite} from "react-icons/tfi";
import {TfiPencilAlt} from "react-icons/tfi";
import {TfiHome} from "react-icons/tfi";
import './UsageItems.scss'

interface institutions {
  name: string;
}

const UsageItems: FC<institutions> = () => {
  return (
    <>
      <Col lg={4} md={6}>
        <Card>
          <Card.Body className="p-5">
            <TfiWrite className="icon-items"/>
            <Card.Title className="pt-4">Tests</Card.Title>
            <Card.Text className="py-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6}>
        <Card>
          <Card.Body className="p-5">
            <TfiPencilAlt className="icon-items"/>
            <Card.Title className="pt-4">Exams</Card.Title>
            <Card.Text className="py-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6}>
        <Card>
          <Card.Body className="p-5">
            <TfiHome className="icon-items"/>
            <Card.Title className="pt-4">Homework</Card.Title>
            <Card.Text className="py-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>

    </>
  );
};

export default UsageItems;
