import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const About = () => {
  return (
    <div className="p-5">
      <Container>
        <div className="text-center pb-3">
          <h2 className="fw-bolder ">
            Know More <span className="text-primary">About Us</span>
          </h2>
          <p className="text-secondary">
            Know About us to build your trust and get the best products
          </p>
        </div>
        <Row xs={1} md={2} className="g-5">
          <Slide left>
            <Col>
              <div className="">
                <img
                  className=" rounded rounded-5 img-fluid"
                  src={`https://i.ibb.co/t4yXQ2q/singlebanner.jpg`}
                  alt=""
                />
              </div>
            </Col>
          </Slide>
          <Slide right>
            <Col>
              <div>
                <h1>
                  {' '}
                  <span className="fw-bolder text-danger"> Sky</span>
                  <span className="fw-bolder text-info">Cloud</span>
                </h1>
                <p className="text-muted">
                  We at <strong>Sky Cloud</strong> Team are always fully focused
                  on helping you to deal with your Dream Photography with the
                  best way.
                </p>
                <p className="text-muted">
                  Since 2021, we’ve helped more than 500,000 people of all ages.
                  People with Photography dreams are always hardly welcomed by
                  us. We deliver the best of our devices , so that they can
                  Start up with their career in photography.
                </p>

                <HashLink as={Link} to="/explore">
                  <Button
                    className="shadow my-3 rounded-pill"
                    variant="outline-dark"
                  >
                    See Products
                  </Button>
                </HashLink>
              </div>
            </Col>
          </Slide>
        </Row>
      </Container>
    </div>
  );
};

export default About;
