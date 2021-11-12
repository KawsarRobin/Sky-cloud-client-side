import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Load myOrders from database with email
  useEffect(() => {
    if (user.email) {
      fetch(
        `https://sheltered-fortress-54983.herokuapp.com/myOrders/${user.email}`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setMyOrders(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err.message));
    }
  }, [user.email]);

  // Deleted or cancel Orders by id
  const handleDelete = (id) => {
    if (window.confirm('Are You Sure to cancel Order?')) {
      const url = `https://sheltered-fortress-54983.herokuapp.com/deleteMyOrder/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('You have successfully Canceled your Order!!');
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  if (isLoading) {
    return (
      <div className="text-center m-5">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  } else {
    return (
      <section style={{ backgroundColor: '#EDE9FE' }}>
        <Container className="py-md-4 vh-100 p-sm-3">
          <Row xs={1} md={2} className="g-4">
            {myOrders.map((order) => (
              <Col key={order._id} className="p-3">
                <Card className="bg-light shadow">
                  <Row>
                    <Col>
                      <Card.Img className="p-2" variant="top" src={order.img} />
                    </Col>
                    <Col>
                      <Card.Body className="text-secondary">
                        <h4>{order.name}</h4>
                        <h6>
                          Status:{' '}
                          <span className="text-danger"> {order.status}</span>
                        </h6>
                        <Button
                          onClick={() => handleDelete(order._id)}
                          variant="danger"
                          className=""
                        >
                          Cancel
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  }
};

export default MyOrder;
