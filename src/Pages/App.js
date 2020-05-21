import React from 'react';
import { ProductList } from './ProductList'; // const vatiables are imported in curly brackets; if it's default functions, they are exported as they are;
import { ProductDetail } from './ProductDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch> 
        <Route path="/" component={ProductList} exact />
        <Route path="/details" component={ProductDetail}/>
      </Switch>
    </Router>
  ); /* React router does partial matching, so '/' partially matches '/details', so it would incorrectly return
   '/' route for ProductDetail. The 'exact' param disables the partial matching for a route and makes sure that 
   it only returns the route if the path is an EXACT match to the current url.*/
}

export default App;

