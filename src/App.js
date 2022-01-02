import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/PageNotFound';
import AuthProvider from './context/AuthProvider';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import AboutUs from './Pages/AboutUs/AboutUs';
import contactUs from './Pages/Contact-us/contactUs';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            {/* <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute> */}
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about-us">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contact-use">
              <contactUs></contactUs>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/ProductDetails">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route exact path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>


    </>
  );
}

export default App;
