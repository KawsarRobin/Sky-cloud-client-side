import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewDetails = (props) => {
  const { name, description, img, rating } = props.review;

  return (
    <Col>
      <Card>
        <Card.Img
          className="m-4 w-25 me-auto rounded rounded-circle img-fluid"
          variant="top"
          src={img}
        />
        <Card.Body className="text-start">
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
  );
};

export default ReviewDetails;
