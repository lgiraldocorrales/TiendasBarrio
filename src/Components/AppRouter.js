import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';
import { HomeScreen } from './Pages/HomeScreen';
import { Products } from './Pages/Products';
import { IndexScreen } from './Pages/IndexScreen';
import { ProductDetail } from './ProductDetail/ProductDetail';
import { ProductStore1 } from './ProductStore/ProductStore1';
import { ProductStore2 } from './ProductStore/ProductStore2';
import { ProductStore3 } from './ProductStore/ProductStore3';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Switch>
            <Route exact path='/' component={IndexScreen} />
            <Route exact path='/home' component={HomeScreen} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/productStore1' component={ProductStore1} />
            <Route exact path='/productStore2' component={ProductStore2} />
            <Route exact path='/productStore3' component={ProductStore3} />
            <Route exact path='/productDetail' component={ProductDetail} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
