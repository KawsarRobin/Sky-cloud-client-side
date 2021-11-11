import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const PlaceOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  //Find single data by id
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  //Send order and user data to server
  const onSubmit = (data) => {
    const email = data.email;
    const status = 'Pending';
    product.UserName = user.displayName;
    product.email = email;
    product.address = data.address;
    product.phone = data.phone;
    product.date = data.date;
    product.status = status;
    delete product._id;

    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Your Booking Placed Successfully');
          reset();
        }
      })
      .catch((err) => console.log(err.message));
  };

  if (isLoading) {
    return (
      <div className="text-center m-5">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: '#F7FEE7' }}>
        <Container>
          <Row xs={1} md={2} className="gx-4">
            <Col>
              <Card className="rounded rounded-3 bg-light shadow my-3 ">
                <Card.Img
                  variant="top"
                  src={product.img}
                  className="p-3 img-fluid rounded rounded-3"
                />
                <Card.Body className="p-md-5">
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    <h2>{product.name}</h2>
                    <h4 className="text-danger">${product.price}</h4>
                  </Card.Title>
                  <div>
                    <p className="ps-2 text-start"></p>
                    <span>{product.description?.slice(0, 100)}</span> <br />
                    <span></span>{' '}
                  </div>{' '}
                  <hr />
                  <div className="d-flex justify-content-between px-3">
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
                    <p>
                      <Link to="/">
                        <Button size="sm" variant="primary">
                          Back Home
                        </Button>
                      </Link>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <div className="bg-light py-3 shadow-lg my-5 border border-3 rounded rounded-3">
                <h3 className="pt-3 fw-bold text-secondary">
                  Fill-Up This Form!
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="d-flex flex-column w-100 px-4"
                >
                  <input
                    placeholder="Your Name"
                    className=""
                    defaultValue={user.displayName}
                    {...register('name', { required: true })}
                  />
                  <input
                    placeholder="Your Email"
                    type="email"
                    defaultValue={user.email}
                    {...register('email', { required: true })}
                  />
                  <textarea
                    type="text"
                    placeholder="Address"
                    {...register('address', { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    {...register('phone', { required: true })}
                  />
                  <input
                    type="date"
                    placeholder="date"
                    {...register('date', { required: true })}
                  />

                  <input className="btn btn-outline-success" type="submit" />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default PlaceOrder;
