import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
  return (
    <div style={{ backgroundColor: '#', fontWeight: '700' }}>
      <Container>
        <Row xs={1} md={2} className="gx-md-5 gx-sm-3 py-5">
          <Col>
            <img
              src="https://i.ibb.co/jzSfzh0/drone.png"
              alt=""
              className=" img-fluid "
            />
          </Col>
          <Col className="pt-3 mb-5 text-start">
            <h6 className="text-danger fw-bold">
              Let your dreams touch Sky's Cloud
            </h6>
            <h1 className="fw-bolder">Sky Cloud</h1>

            <h5>
              The place where we confirm your satisfaction. Start your dream
              Photography, Cinematography with our powerfull drones belongs from
              us.
            </h5>
            <br />
            <HashLink to="#services">
              <Button className="shadow" variant="outline-success">
                Explore now
              </Button>
            </HashLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
