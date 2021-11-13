import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../src/Pages/Login/PrivateRoute/PrivateRoute';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PlaceOrderPage from './Pages/PlaceOrderPage/PlaceOrderPage';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  const Styles = {
    color: '#0e1133',
  };
  return (
    <div style={Styles} className="App overflow-hidden">
      <AuthProvider>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/products">
                <Products></Products>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/explore">
                <ExplorePage></ExplorePage>
              </PrivateRoute>
              <PrivateRoute path="/placeorder/:id">
                <PlaceOrderPage></PlaceOrderPage>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
