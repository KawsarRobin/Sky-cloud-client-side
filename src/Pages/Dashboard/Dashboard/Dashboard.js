import React from 'react';
import { Button, Col, Nav, Row } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
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
          style={{ backgroundColor: '#90CAF9' }}
          xs={12}
          md={3}
        >
          <Nav.Link
            as={Link}
            to="/home"
            className="text-black mt-3 text-decoration-none fw-bolder"
          >
            <h5>
              <i class="fas fa-home"></i> Home
            </h5>
          </Nav.Link>{' '}
          <hr />
          {admin || (
            <div className="text-start my-2">
              <Link className="text-decoration-none text-black" to={`${url}`}>
                <h6 className="my-4">
                  {' '}
                  <i class="fas fa-shopping-cart"></i> My Orders
                </h6>
              </Link>

              <Link
                className="text-decoration-none text-black"
                to={`${url}/addReview`}
              >
                <h6 className="my-4">
                  <i class="fas fa-star-half-alt"></i> Review
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-black"
                to={`${url}/pay`}
              >
                <h6 className="my-4">
                  <i class="fas fa-money-check-alt"></i> Pay
                </h6>
              </Link>
            </div>
          )}
          {admin && (
            <div className="text-start ">
              <Link
                className="text-decoration-none text-black"
                to={`${url}/manageAllOrders`}
              >
                <h6 className="my-4">
                  <i class="fas fa-tasks"></i> Manage Orders
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-black"
                to={`${url}/addProduct`}
              >
                <h6 className="my-4">
                  <i class="fas fa-plus-square"></i> Launch Product
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-black"
                to={`${url}/makeAdmin`}
              >
                <h6 className="my-4">
                  <i class="fas fa-user"></i> Make Admin
                </h6>
              </Link>
              <Link
                className="text-decoration-none text-black"
                to={`${url}/manageProducts`}
              >
                <h6 className="my-4">
                  <i class="fas fa-tasks"></i> Manage Products
                </h6>
              </Link>
            </div>
          )}
          <br />
          <Button variant="secondary" onClick={logOut}>
            {' '}
            LogOut
          </Button>
        </Col>

        <Col xs={12} md={9}>
          <Switch>
            <Route exact path={`${path}`}>
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
            <Route path={`${path}/addReview`}>
              <AddReview></AddReview>
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
    </div>
  );
};

export default Dashboard;
