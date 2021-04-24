
//import './App.css';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
//import Home from './Home';
//import Checkout from './Checkout';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"; 
//import Login from './Login';
//import { useEffect } from 'react';
//import { loadStripe } from '@stripe/stripe-js';
//import { Elements } from '@stripe/react-stripe-js';
//import Orders from "./Orders";
//import { useStateValue } from './StateProvider';
//import { auth } from './firebase';
//import Payment from './Payment';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
            <Route path="/login">
              {/*<Login />*/}
            </Route>
            <Route path="/orders">
              <Header />
              {/*<Orders />*/}
            </Route>
            <Route path="/checkout">
              {/*<Header />*/}
              {/*<Checkout />*/}
            </Route>
            <Route path="/payment">
              {/*<Header />*/}
              {/*<Elements stripe={promise}>*/}
                {/*<Payment />*/}
              {/*</Elements>*/}
            </Route>
            <Route path="/">
              <Header />
              {/*<Home />*/}
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
