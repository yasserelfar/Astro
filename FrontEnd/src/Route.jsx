import Display from './Display.jsx'
import UsersList from './UserList.jsx'
import ProductDetails from './ProductDetails.jsx'
import SignUpPage from './SignUpPage.jsx'
import LoginPage from './LoginPage.jsx'
import CartPage from './CartPage.jsx'
import Payment from './Payment.jsx'
import UserPage from './UserPage.jsx'
import Dashboard from './Dashbored.jsx'
import AdminUpdate from './AdminUpdate.jsx'
import AdminDelete from './AdminDelete.jsx'
import AdminAdd from './AdminAdd.jsx'
import Home from './Home.jsx'
import {
    createBrowserRouter,
    // RouterProvider,
    // Route,
} from "react-router-dome";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Payment",
        element: <Payment />,
    },
    {
        path: "/adminadd",
        element: <AdminAdd />,
    },
    {
        path: "/adminupdate",
        element: <AdminUpdate />,
    },
    {
        path: "/display",
        element: <Display />,
    },
    {
        path: "/productdetails/:productId",
        element: <ProductDetails />,
    },
    {
        path: "/signUppage",
        element: <SignUpPage />,
    },
    {
        path: "/loginpage",
        element: <LoginPage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
    {
        path: "/userlist",
        element: <UsersList />,

    },
    {
        path: "/userpage",
        element: <UserPage />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/admindelete",
        element: <AdminDelete />,
    },


])