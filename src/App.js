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
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
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
