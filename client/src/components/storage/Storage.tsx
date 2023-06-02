import { FC, useEffect, useRef, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import { Col, Row } from "react-bootstrap";
import server from "../../assets/cloud-server.png";
import "./Storage.scss";


const Storage: FC = () => {
  const [animate, setAnimate] = useState(false)
  const {ref : myRef, inView: myElementIsVisible, entry} = useInView({
    threshold: 0.5
  })
  
  useEffect(() => {
    if (myElementIsVisible) {
      console.log(animate)
      setAnimate(true)
    }
  }, [myElementIsVisible, animate]);

  return (
    <section id="storage" className="storage mt-3">
      <div className={`container w-75 ${animate ? 'animate' : 'opacity-0'}`} ref={myRef} >
        <Row className="py-5">
          <Col
            md={6}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <img src={server} className="cloud p-3" alt="server" />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
          <h2 className="storage-title py-2">
              Your data is stored securely on our servers
            </h2>
            <p className="storage-info py-3">
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
