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
