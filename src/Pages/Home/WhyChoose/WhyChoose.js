import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';

const WhyChoose = () => {
  return (
    <div style={{ backgroundColor: '#e3f2fd' }}>
      <Container className="py-5 overflow-hidden">
        <div className="text-center pb-3">
          <h2 className="fw-bolder ">
            <span className="text-info">Why</span> You Choose Us
          </h2>
          <p className="text-secondary">
            You don't have to Think Alone, you've got our assistance and help.
          </p>
        </div>
        <Slide right>
          <Row xs={2} md={4} className="g-4">
            <Col>
              <div
                className="p-4 h-100   text-center"
                style={{
                  borderRadius: '20%',
                  borderTop: '5px solid #68629E',
                  borderBottom: '5px solid #68629E',
                }}
              >
                <div className="text-center">
                  <img
                    src="https://i.ibb.co/qWC8njx/training-1.png"
                    alt=""
                    className="w-25 mb-2"
                  />
                </div>
                <h6 style={{ color: '#68629E' }}>Safety First</h6>
                <p>We always make sure your safety</p>
              </div>
            </Col>
            <Col>
              <div
                className="p-4 h-100   text-center"
                style={{
                  borderRadius: '20%',
                  borderTop: '5px solid #DD246E',
                  borderBottom: '5px solid #DD246E',
                }}
              >
                <div className="text-center">
                  <img
                    src="https://i.ibb.co/QvVMng5/training-2.png"
                    alt=""
                    className="w-25 mb-2"
                  />
                </div>
                <h6 style={{ color: '#DD246E' }}>Advanced Operating</h6>
                <p>Our products Operated with Advance technology</p>
              </div>
            </Col>
            <Col>
              <div
                className="p-4 h-100   text-center"
                style={{
                  borderRadius: '20%',
                  borderTop: '5px solid #2D69EF',
                  borderBottom: '5px solid #2D69EF',
                }}
              >
                <div className="text-center">
                  <img
                    src="https://i.ibb.co/pjHZkH3/training-3.png"
                    alt=""
                    className="w-25 mb-2"
                  />
                </div>
                <h6 style={{ color: '#2D69EF' }}>Optimal Efficiency</h6>
                <p>Optimal Efficiency to low cost and save money</p>
              </div>
            </Col>
            <Col>
              <div
                className="p-4 h-100  text-center"
                style={{
                  borderRadius: '20%',
                  borderTop: '5px solid #1AA291',
                  borderBottom: '5px solid #1AA291',
                }}
              >
                <div className="text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1534/1534952.png"
                    alt=""
                    className="w-25 mb-2"
                  />
                </div>
                <h6 style={{ color: '#1AA291' }}>Team Work</h6>
                <p>We work with team to ensure you get best products</p>
              </div>
            </Col>
          </Row>
        </Slide>
      </Container>
    </div>
  );
};

export default WhyChoose;
