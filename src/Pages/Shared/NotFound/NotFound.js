import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center mb-4 px-5">
      <img
        src="https://image.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg"
        alt=""
        className="img-fluid"
      />
      <h1 className="text-danger">Page Not Found!</h1>
      <h4>
        It looks like you may have a wrong turn. Don't worry... it happens to
        the best of us.
      </h4>
      <h4>Please try search for some other page</h4>
      <Link to="/home">
        <br />
        <button className="shadow btn btn-danger btn-lg"> Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
