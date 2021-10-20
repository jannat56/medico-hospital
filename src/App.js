import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Footer from './Pages/Footer/Footer';

import Home from './Pages/Home/Home/Home';

import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Review from './Pages/Review/Review';
import Header from './Pages/Shared/Header/Header';
import Complain from './Pages/Complain/Complain'
import Register from './Pages/Register/Register';






function App() {
  return (
    <div className="App">
     <AuthProvider>
       <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
          </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <PrivateRoute path="/appoinment/:serviceId">
          <Appoinment></Appoinment>
          </PrivateRoute>
       <PrivateRoute path="/review">
         <Review></Review>
          </PrivateRoute>
       <PrivateRoute path="/complain">
        <Complain></Complain>
          </PrivateRoute>
          <Route path="/register">
        <Register></Register>
          </Route>
        <Route path="/login">
          <Login></Login>
          </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
</AuthProvider> 
      
    
    
     
          </div>
  );
}

export default App;
