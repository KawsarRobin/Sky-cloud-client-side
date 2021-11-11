import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const {
    signInUsingGoogle,
    signInUsingEmailAndPassword,
    handleEmailChange,
    handlePasswordChange,
    error,
    user,
    setError,
    setUser,
    saveUser,
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

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    signInUsingEmailAndPassword()
      .then((result) => {
        setError('');
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Container className="p-md-5 my-5 w-75 border shadow-lg border-2 rounded">
      <Form onSubmit={handleEmailSignIn}>
        <Form.Group className="my-3" controlId="formBasicEmail">
          <h3>Please Login</h3>
          <Form.Label></Form.Label>
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {user.email ? '' : <h4 className="text-danger my-2">{error}</h4>}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="w-25 my-3" variant="primary" type="submit">
          Login
        </Button>
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
      <Link className="text-decoration-none" to="register">
        <h5 className="text-dark mb-3"> Don't Have Account ? </h5>
      </Link>
    </Container>
  );
};

export default Login;
