import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Cart from "./Cart";
import Shop from "./Shop";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: (
            <>
                <NavBar />
                <Outlet />
            </>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
];

export default routes;