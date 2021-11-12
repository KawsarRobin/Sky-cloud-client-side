import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const product = data;

    fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('New Product Launched Successfully');
          reset();
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Container
      style={{ backgroundColor: '#94A3B8' }}
      className=" mx-md-5 rounded rounded-3 border border-3 shadow my-5  w-75"
    >
      <h3 className="py-3 fw-bolder text-Primary">Launch a New Product</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column pb-5"
      >
        <input
          placeholder="Product Name"
          {...register('name', { required: true })}
        />

        <textarea
          placeholder="Product Description"
          {...register('description', { required: true })}
        />

        <input
          placeholder="Image URL"
          {...register('img', { required: true })}
        />
        <input
          placeholder="Price in $"
          {...register('price', { required: true })}
        />
        <input
          placeholder="Rating (Within 5)"
          type="text"
          {...register('rating', { required: true })}
        />

        <input className="btn btn-warning" value="Add Product" type="submit" />
      </form>
    </Container>
  );
};

export default AddProduct;
