import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WhyChoose = () => {
  return (
    <div style={{ backgroundColor: '#' }}>
      <Container className="py-5 overflow-hidden">
        <div className="text-center pb-3">
          <h2 className="fw-bolder ">
            <span className="text-info">Why</span> You'll Recommend from Us
          </h2>
          <p className="text-secondary">
            You don't have to Think Alone, you've got our assistance and help.
          </p>
        </div>
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
                  src="http://hrkit.rometheme.pro/skyandcloud/wp-content/uploads/sites/10/2021/06/training-1.png"
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
                  src="http://hrkit.rometheme.pro/skyandcloud/wp-content/uploads/sites/10/2021/06/training-2.png"
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
                  src="http://hrkit.rometheme.pro/skyandcloud/wp-content/uploads/sites/10/2021/06/training-3.png"
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
      </Container>
    </div>
  );
};

export default WhyChoose;
