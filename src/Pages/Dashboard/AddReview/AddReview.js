import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const img = user.photoURL;
  const defaultImg =
    'https://image.flaticon.com/icons/png/512/1106/1106631.png';

  const onSubmit = (data) => {
    const review = data;

    fetch('https://sheltered-fortress-54983.herokuapp.com/addReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Review Posted Successfully');
          reset();
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <Container
        style={{ backgroundColor: '#818CF8' }}
        className=" w-75 mx-md-5 rounded rounded-3 border border-3 shadow my-5 "
      >
        <h2 className="py-3 fw-bolder text-warning">Write A Review</h2>
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
          {(img || defaultImg) && (
            <input
              defaultValue={img ? img : defaultImg}
              placeholder="Photo URL"
              {...register('img', { required: false })}
            />
          )}

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
            className="btn btn-secondary "
            value="Post Review"
            type="submit"
          />
        </form>
      </Container>
    </div>
  );
};

export default Review;
