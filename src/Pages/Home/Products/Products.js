import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
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
            Our <span className="text-success">Products</span> For You
          </h2>
          <p className="text-secondary text-center">
            You`re guaranteed to find something that`s right for you.
          </p>
          <Row xs={1} md={3} className="g-3">
            {products?.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}>
                {' '}
              </Product>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default Products;
