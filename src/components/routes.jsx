import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Cart from "./Cart";
import Shop from "./Shop";

const routes = [
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
    {
        path: "cart",
        element: <Cart />,
    },
];

export default routes;