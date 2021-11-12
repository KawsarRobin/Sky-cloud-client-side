import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  if (isLoading) {
    return (
      <div className="text-center m-5">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  } else {
    return (
      <div>
        <Container className="py-5">
          <h2 className="text-center fw-bolder">
            <span className="text-danger">
              Explore Our All Products From Below
            </span>
          </h2>
          <p className="text-secondary text-center">
            We Promise that you will get Cheap and Quality products here!
          </p>
          <Row xs={1} md={3} className="g-3">
            {products.map((product) => (
              <Col key={product._id}>
                <Card className="rounded rounded-3 service shadow bg-light h-100">
                  <Card.Img
                    variant="top"
                    src={product.img}
                    className="  rounded rounded-3"
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center">
                      <h5>{product.name}</h5>
                      <h5 className="text-danger">${product.price}</h5>
                    </Card.Title>
                    <div>
                      <span>{product.description?.slice(0, 50)}...</span>
                      <br />

                      <span>
                        {' '}
                        <Rating
                          readonly
                          emptySymbol="far fa-star text-danger"
                          fullSymbol="fas fa-star text-danger"
                          initialRating={product.rating}
                        >
                          {' '}
                        </Rating>{' '}
                        <span className="fw-bold">{product.rating}</span>
                      </span>
                    </div>{' '}
                    <br />
                    <p>
                      <Link to={`/placeorder/${product._id}`}>
                        <Button size="" variant="outline-success">
                          Purchase Now
                        </Button>
                      </Link>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default Explore;
