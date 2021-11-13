import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
  return (
    <div style={{ backgroundColor: '#42a5f5', fontWeight: '700' }}>
      <Container>
        <Row xs={1} md={2} className="gx-md-5 gx-sm-3 py-5">
          <Col className="pt-3 mb-5 text-start ">
            <h6 className=" text-warning fw-bold">
              Let Your Dreams Touch Sky's Cloud
            </h6>
            <h2 className="fw-bold">Sky Cloud</h2>

            <p>
              The place where we make sure your Satisfaction. Start your Dream
              Photography, Capture moments of life, nature, frame the time with
              our power-full Drones .
            </p>
            <br />
            <HashLink to="/explore">
              <Button className="shadow me-3 fw-bold" variant="warning">
                Explore More
              </Button>
            </HashLink>
            <HashLink to="/dashboard">
              <Button className="shadow fw-bold" variant="warning">
                <i className="fas fa-shopping-cart"></i>
              </Button>
            </HashLink>
          </Col>
          <Col>
            <img
              src="https://i.ibb.co/jzSfzh0/drone.png"
              alt=""
              className=" img-fluid "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
