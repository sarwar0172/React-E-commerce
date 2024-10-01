import React, { useEffect } from "react";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import SingupPage from "./pages/SingupPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailsPage from "./pages/ProductDetails";
import Protected from "./features/Auth/components/protected";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemByuserIdAsynce } from "./features/Cart/CartSlice";
import { selectLoggedInUser } from "./features/Auth/authSlice";
import PageNotFound from "./pages/404";
import OrderSuccess from "./pages/OrderSuccessPage";
import UserOrders from "./features/user/component/UserOrders";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserProfile from "./features/user/component/UserProfile";
import UserProfilepage from "./pages/userProfilepage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/Auth/components/Logout";
import ForgotPasswordPage from "./pages/ForgotPasswordpage";
import ProtectedAdmin from "./features/Auth/components/protectedAdmin";
import AdminHome from "./pages/AdminHome";
import AdminProductDetailsPage from "./pages/adminProductdetailPage";
import ProductFrom from "./features/admin/component/productFrom";
import AdminProductFromPage from "./pages/AdminProductFromPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/login",
    element: <Loginpage></Loginpage>,
  },
  {
    path: "/signup",
    element: <SingupPage></SingupPage>,
  },
  {
    path: "/cart",

    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailsPage></ProductDetailsPage>
      </Protected>
    ),
  },
  {
    path: "/admin/product-detail/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailsPage></AdminProductDetailsPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/productFrom",
    element: (
      <ProtectedAdmin>
       <AdminProductFromPage></AdminProductFromPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/productFrom/edit/:id",
    element: (
      <ProtectedAdmin>
       <AdminProductFromPage></AdminProductFromPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccess></OrderSuccess>,
  },
  {
    path: "/order",
    element: <UserOrdersPage></UserOrdersPage>,
  },
  {
    path: "/profile",
    element: <UserProfilepage></UserProfilepage>,
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/forgot_password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },

  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const UserID = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (UserID) {
      console.log(UserID.id);
    }
    if (UserID) {
      dispatch(fetchItemByuserIdAsynce(UserID.id));
      dispatch(fetchLoggedInUserAsync(UserID.id));
    }
  }, [dispatch, UserID]);
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <Loginpage></Loginpage> */}
      {/* <SingupPage></SingupPage> */}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
