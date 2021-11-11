import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrder from '../MyOrders/MyOrder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  return (
    <Container>
      <Row className="g-4">
        <Col
          className="pt-4"
          style={{ borderRight: '2px solid black' }}
          xs={12}
          md={2}
        >
          {
            <div className="text-start">
              <Link
                className="text-decoration-none text-black"
                to={`${url}/myOrders`}
              >
                <h6>My Orders</h6>
              </Link>
              <Link
                className="text-decoration-none text-black"
                to={`${url}/review`}
              >
                <h6>Review</h6>
              </Link>
              <Link
                className="text-decoration-none text-black"
                to={`${url}/pay`}
              >
                <h6>Payment</h6>
              </Link>
            </div>
          }
          {admin && (
            <div className="text-start ">
              <Link
                className="text-decoration-none text-black"
                to={`${url}/manageAllOrders`}
              >
                <h6>Manage Orders</h6>
              </Link>
              <Link
                className="text-decoration-none text-black"
                to={`${url}/addProduct`}
              >
                <h6>Lunch Product</h6>
              </Link>
              <Link
                className="text-decoration-none text-black"
                to={`${url}/makeAdmin`}
              >
                <h6>Make Admin</h6>
              </Link>
              <Link
                className="text-decoration-none text-black"
                to={`${url}/manageProducts`}
              >
                <h6>Manage Products</h6>
              </Link>
            </div>
          )}

          <h6 className="text-start">LogOut</h6>
        </Col>
        <Col xs={12} md={10}>
          <Switch>
            <Route path={`${path}/myOrders`}>
              <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
