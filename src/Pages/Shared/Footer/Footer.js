import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
import Slide from 'react-reveal/Slide';

const Footer = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <div style={{ backgroundColor: '#104161' }}>
      <Container>
        <Slide bottom>
          <Row xs={1} md={4} className="p-5 g-3 text-white">
            <Col>
              <img
                src="https://i.ibb.co/mSjxn9t/logo-6.png"
                alt=""
                className="img-fluid"
              />
              <p>
                A place you shop your dream Drone, Fly with your dream by us.
              </p>
              <div className="fw-bolder d-flex justify-content-center align-items-center">
                <h3>
                  <i className="fab fa-facebook "></i>
                </h3>
                <h3>
                  <i className="fab fa-instagram mx-3"></i>
                </h3>
                <h3>
                  <i className="fab fa-dribbble"></i>
                </h3>
              </div>
            </Col>
            <Col>
              <h5>Booking Information's</h5>
              <p>General information</p>
              <p>Offer Packages</p>
              <p>Partner's Profile</p>
              <p>Active hours</p>
              <p>Upcoming discounts</p>
              <p>Contact</p>{' '}
            </Col>
            <Col>
              <h5>About</h5>
              <p>Importers</p>
              <p>Partners</p>
              <p>News & blogs</p>
              <p>FAQs</p>
              <p>Our Introduction</p>
              <p>Galleries</p>
            </Col>
            <Col>
              <h5>Subscribe</h5>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Your email..."
                  aria-label="Recipient's username"
                />
                <Button variant="secondary" size="sm">
                  {arrowIcon}
                </Button>
              </InputGroup>
              <p>
                Get the latest Discount Products and updates right at your
                inbox.
              </p>
            </Col>
          </Row>
        </Slide>
      </Container>

      <hr />
      <h6 className="text-center py-2 fw-bolder text-white">
        <small>Copyright © 2021 Kawsar Robin All rights reserved.</small>
      </h6>
    </div>
  );
};

export default Footer;
