import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home.jsx";
import Display from "./Display.jsx";
import ProductDetails from "./ProductDetails.jsx";
import LoginPage from "./LoginPage.jsx";
import SignUpPage from "./SignUpPage.jsx";
import UserPage from "./UserPage.jsx";
import CartPage from "./CartPage.jsx";
import ProductDetailsPage from "./ProductDetails.jsx";
import AdminAdd from "./AdminAdd.jsx";
import UsersList from './com/UserList.jsx'
import AdminDelete from "./AdminDelete.jsx";
import Payment from './Payment.jsx'
import AdminUpdate from "./AdminUpdate.jsx";
import DashBored from "./Dashbored.jsx";
import AdminProducts from "./AdminProducts.jsx";
import DisplayOrder from "./DisplayOrder.jsx";
import AllData from "./com/AllData.jsx";
import AllDataPage from "./AllDataPage.jsx";
import UserOrderPage from "./UserOrderPage.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/AdminAdd",
                element: <AdminAdd />
            },
            {
                path: "/AdminDelete",
                element: <AdminDelete />
            },
            {
                path: "/AdminUpdate",
                element: <AdminUpdate />
            }, {
                path: "/DashBored",
                element: <DashBored />
            },
            {
                path: "/ProductDetailsPage",
                element: <ProductDetailsPage />
            },
            {
                path: "/display",
                element: <Display />
            },
            {
                path: "/productdetails/:productId",
                element: <ProductDetails />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/signup",
                element: <SignUpPage />
            },
            {
                path: "/userPage",
                element: <UserPage />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/userlist",
                element: <UsersList />,

            },
            {
                path: "/Payment",
                element: <Payment />,
            },
            {
                path: "/adminproducts",
                element: <AdminProducts />,
            },
            {
                path: "/orders",
                element: <DisplayOrder />
            },
            {
                path: "/alldata",
                element: <AllDataPage />
            }, {
                path: "/userorder",
                element: <UserOrderPage />
            }
        ]
    }
])