import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { name, description, price, rating, img, _id } = props.product;
  return (
    <Col>
      <Card className="rounded rounded-3 service shadow bg-light h-100">
        <Card.Img variant="top" src={img} className="  rounded rounded-3" />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h5>{name}</h5>
            <h5 className="text-danger">${price}</h5>
          </Card.Title>
          <div>
            {/* <h6 className="ps-2 text-start ">
              <i className="far fa-smile-beam "></i>{' '}
              <span>
                {' '}
                {rating >= 7 ? `${rating} Superb` : `${rating} Good`}
              </span>
            </h6> */}
            <span>{description.slice(0, 100)}...</span>
          </div>{' '}
          <br />
          <p>
            <Link to={`/placeorder/${_id}`}>
              <Button size="" variant="outline-success">
                Purchase Now
              </Button>
            </Link>
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
