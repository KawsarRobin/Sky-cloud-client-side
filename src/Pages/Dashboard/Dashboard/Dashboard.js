import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrder from '../MyOrders/MyOrder';
import Pay from '../Pay/Pay';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  return (
    <div>
      <Row>
        <Col
          className="p-4
          ."
          style={{ backgroundColor: '#01579b' }}
          xs={12}
          md={3}
        >
          <img
            src="https://i.ibb.co/mSjxn9t/logo-6.png"
            alt=""
            className="img-fluid"
          />
          <hr />

          {admin || (
            <div className="text-start my-2">
              <Link to="/home" className="text-white  text-decoration-none">
                <h6 className="my-4 ">
                  <i className="fas fa-home"></i> Home
                </h6>
              </Link>
              <Link className="text-decoration-none text-white" to={`${url}`}>
                <h6 className="">
                  {' '}
                  <i className="fas fa-shopping-cart"></i> My Orders
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-white"
                to={`${url}/addReview`}
              >
                <h6 className="my-4">
                  <i className="fas fa-star-half-alt"></i> Review
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-white"
                to={`${url}/pay`}
              >
                <h6 className="my-4">
                  <i className="fas fa-money-check-alt"></i> Pay
                </h6>
              </Link>
            </div>
          )}
          <hr />
          {admin && (
            <div className="text-start ">
              <Link to="/home" className="text-white  text-decoration-none">
                <h6 className="my-4 ">
                  <i className="fas fa-home"></i> Home
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-white"
                to={`${url}/manageAllOrders`}
              >
                <h6 className="my-4">
                  <i className="fas fa-tasks"></i> Manage Orders
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-white"
                to={`${url}/addProduct`}
              >
                <h6 className="my-4">
                  <i className="fas fa-plus-square"></i> Launch Product
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-white"
                to={`${url}/makeAdmin`}
              >
                <h6 className="my-4">
                  <i className="fas fa-user"></i> Make Admin
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-white"
                to={`${url}/manageProducts`}
              >
                <h6 className="my-4">
                  <i className="fas fa-tasks"></i> Manage Products
                </h6>
              </Link>
            </div>
          )}
          <br />
          <Button variant="dark" onClick={logOut}>
            {' '}
            <i className="fas fa-sign-out-alt"></i> LogOut
          </Button>
        </Col>

        <Col className="p-0" xs={12} md={9}>
          <div
            className="text-start ps-5"
            style={{ backgroundColor: '#42a5f5' }}
          >
            <img
              src="https://i.ibb.co/mSjxn9t/logo-6.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <Switch>
            <Route exact path={`${path}`}>
              <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
