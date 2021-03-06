import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Load all products
  useEffect(() => {
    fetch('https://sheltered-fortress-54983.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // Deleted or cancel Orders by id
  const handleDelete = (id) => {
    if (window.confirm('Are You sure to delete this product?')) {
      const url = `https://sheltered-fortress-54983.herokuapp.com/deleteProduct/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('You have successfully Deleted this product!!');
            const remainingOrders = products.filter(
              (order) => order._id !== id
            );
            setProducts(remainingOrders);
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
      <div style={{ backgroundColor: '#DCEDC8' }}>
        <Container className="py-md-4 mt-4 mt-md-0 p-sm-3">
          <Row xs={1} md={2} className="g-4">
            {products.map((product) => (
              <Col key={product._id} className="p-3">
                <Card className="bg-light shadow">
                  <Row>
                    <Col>
                      <Card.Img
                        className="p-2"
                        variant="top"
                        src={product.img}
                      />
                    </Col>
                    <Col>
                      <Card.Body className="text-secondary">
                        <h6>{product.name}</h6>
                        <p className="text-danger fw-bold">${product.price}</p>
                        <p>
                          Rating:{' '}
                          <span className="text-danger fw-bold">
                            {product.rating}
                          </span>
                        </p>

                        <Button
                          onClick={() => handleDelete(product._id)}
                          variant="danger"
                          className=""
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default ManageProducts;
