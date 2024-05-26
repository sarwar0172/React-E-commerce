import React from 'react';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import SingupPage from './pages/SingupPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: (<Loginpage></Loginpage>),
  },
  {
    path: "/signup",
    element: (<SingupPage></SingupPage>),
  },
  {
    path: "/cart",
    element: (<CartPage></CartPage>),
  },
  {
    path: "/checkout",
    element: (<Checkout></Checkout>),
  },
  {
    path: "/product-detail",
    element: (<ProductDetailsPage></ProductDetailsPage>),
  },
]);

function App() {
  return (
    <div className="App">
  {/* <Home></Home> */}
  {/* <Loginpage></Loginpage> */}
  {/* <SingupPage></SingupPage> */}

  <RouterProvider router={router}/>
    </div>
  );
}

export default App;
