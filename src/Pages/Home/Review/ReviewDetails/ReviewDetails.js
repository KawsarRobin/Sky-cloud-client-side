import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import Slide from 'react-reveal/Slide';

const ReviewDetails = (props) => {
  const { name, description, img, rating } = props.review;

  return (
    <Slide bottom>
      <Col>
        <Card style={{ borderRadius: '10px' }}>
          <Card.Img
            className="m-4 w-25 mx-auto rounded rounded-circle img-fluid"
            variant="top"
            src={img}
          />
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>

            <Card.Text style={{ fontSize: '12px' }}>{description}</Card.Text>
            <p className="fw-bold fs-5">
              <span className="text-danger">{rating} </span>
              {'    '}
              <span>
                {' '}
                <Rating
                  readonly
                  emptySymbol="far fa-star text-danger"
                  fullSymbol="fas fa-star text-danger"
                  initialRating={rating}
                >
                  {' '}
                </Rating>{' '}
              </span>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Slide>
  );
};

export default ReviewDetails;
