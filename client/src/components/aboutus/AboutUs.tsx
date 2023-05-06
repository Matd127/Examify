import { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutUs : FC = () => {
    return(
        <section className="aboutus" id="aboutus">
            <div className="container w-75 py-5">

                <Row>
                    <Col xs={12} md={6} lg={3} className="">
                        <div>
                            x
                        </div>
                        <div>b</div>
                        <div>c</div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default AboutUs