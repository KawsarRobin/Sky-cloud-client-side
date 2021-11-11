import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    registrationUsingEmail,
    handleNameChange,
    error,
    user,
    setError,
    setUser,
    setName,
    saveUser,
    displayName,
    email,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setError('');
        const user = result.user;
        setUser(result.user);
        saveUser(user.email, user.displayName, 'PUT');
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    registrationUsingEmail()
      .then((result) => {
        setError('');
        setName();
        setUser(result.user);
        saveUser(email, displayName, 'POST');
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Container className="p-md-5 my-5 w-75 w-sm-100 border shadow-lg border-3 rounded">
      <Form onSubmit={handleRegister}>
        <Form.Group className="my-3" controlId="formBasicPassword">
          <Form.Label>
            {' '}
            <h3>Register</h3>{' '}
          </Form.Label>

          <Form.Control
            onBlur={handleNameChange}
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {user.email ? '' : <h4 className="text-danger my-2">{error}</h4>}
        </Form.Group>
        <Button className="w-25 my-3" variant="primary" type="submit">
          SignUp
        </Button>
        <br />
        <br />

        <span style={{ cursor: 'pointer' }}>
          <i
            onClick={handleGoogleSignIn}
            className="fab fa-google fs-3 me-3 text-warning"
          ></i>
        </span>
        <span style={{ cursor: 'pointer' }}>
          <i className="fab fa-facebook fs-3 me-3 text-primary"></i>
        </span>
        <span style={{ cursor: 'pointer' }}>
          <i className="fab fa-github fs-3 me-3"></i>
        </span>
      </Form>
      <br />
      <Link className="text-decoration-none" to="/login">
        <h5 className="text-dark mb-3"> Already Registered? </h5>{' '}
      </Link>
    </Container>
  );
};

export default Register;
