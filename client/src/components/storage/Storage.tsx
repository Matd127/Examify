import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import server from '../../assets/cloud-server.png'
import './Storage.scss'

const Storage: FC = () => {
  return (
    <section className="mt-3 bg-light">
      <div className="container w-75">
        <Row className="py-5">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <img src={server} className="cloud p-3" alt="server"></img>
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h2 className="storage-title py-2">Your data is stored securely on our servers</h2>
            <p className="storage-info py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              vero pariatur eos veniam laudantium qui placeat eius reprehenderit
              facilis. Fugiat eius accusamus esse animi, dolor repudiandae
              temporibus eum consequatur libero.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Storage;
