import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ReviewDetails from './ReviewDetails/ReviewDetails';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Load all products
  useEffect(() => {
    fetch('https://sheltered-fortress-54983.herokuapp.com/reviews')
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
        <Row xs={1} md={3} className="g-4">
          {reviews.map((review) => (
            <ReviewDetails key={review._id} review={review}></ReviewDetails>
          ))}
        </Row>
      </Container>
    );
  }
};

export default Review;
