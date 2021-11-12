import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Load all products
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
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
      <Container>
        <h2 className="text-center fw-bolder">
          <span className="text-danger"> What Customer </span>
          <span className="text-info">Says</span>
        </h2>
        <p className="text-secondary text-center">
          We serve They Loved & Spreads loves among others!
        </p>
        <Row xs={1} md={4} className="g-4">
          {reviews.map((review) => (
            <Col key={review._id}>
              <Card>
                <Card.Img
                  className="m-4 w-25 me-auto rounded rounded-circle img-fluid"
                  variant="top"
                  src={review.img}
                />
                <Card.Body className="text-start">
                  <Card.Title>{review.name}</Card.Title>

                  <Card.Text style={{ fontSize: '12px' }}>
                    {review.description}
                  </Card.Text>
                  <p className="fw-bold fs-5">
                    <span className="text-danger">{review.rating} </span>
                    {'    '}
                    <span>
                      {' '}
                      <Rating
                        readonly
                        emptySymbol="far fa-star text-danger"
                        fullSymbol="fas fa-star text-danger"
                        initialRating={review.rating}
                      >
                        {' '}
                      </Rating>{' '}
                    </span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default Review;
