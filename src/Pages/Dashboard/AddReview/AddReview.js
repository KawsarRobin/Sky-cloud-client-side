import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const review = data;
    console.log(review);

    fetch('http://localhost:5000/addReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Review Added Successfully');
          reset();
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <Container className=" w-75 mx-md-5 rounded rounded-3 border border-3 shadow my-5 bg-light">
        <h4 className="py-3 text-primary">Write A Review</h4>
        <h6>Let us know how you enjoyed us</h6>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column pb-5"
        >
          <input
            defaultValue={user?.displayName}
            placeholder="Name"
            {...register('name', { required: true })}
          />
          <input
            defaultValue={user?.email}
            placeholder="Email"
            {...register('email', { required: true })}
          />
          <input
            defaultValue={user?.photoURL}
            placeholder="Photo URL"
            {...register('img', { required: false })}
          />

          <textarea
            placeholder="Your valuable Comment"
            {...register('description', { required: true })}
          />

          <input
            placeholder="Rating (Within 5)"
            type="text"
            {...register('rating', { required: true })}
          />

          <input
            className="btn btn-outline-info "
            value="Post Review"
            type="submit"
          />
        </form>
      </Container>
    </div>
  );
};

export default Review;
