import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { name, description, price, rating, img, _id } = props.product;
  return (
    <Slide left>
      <Col>
        <Card
          className="product rounded rounded-3 service shadow 
        bg-light h-100"
        >
          <Card.Img
            variant="top"
            src={img}
            className=" p-2 rounded rounded-3"
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <h5>{name}</h5>
              <h5 className="text-danger">${price}</h5>
            </Card.Title>
            <div>
              <span>{description?.slice(0, 100)}...</span>
              <br />

              <span>
                {' '}
                <Rating
                  readonly
                  emptySymbol="far fa-star text-warning"
                  fullSymbol="fas fa-star text-warning"
                  initialRating={rating}
                >
                  {' '}
                </Rating>{' '}
                <span className="fw-bold">{rating}</span>
              </span>
            </div>{' '}
            <br />
            <p>
              <Link to={`/placeorder/${_id}`}>
                <Button size="" variant="primary">
                  Purchase Now
                </Button>
              </Link>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Slide>
  );
};

export default Product;
