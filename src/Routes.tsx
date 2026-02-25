import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import Collections from "./pages/Collections"
import Product from "./pages/Product"
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage"
import AboutPage from "./pages/AboutPage"

export const routs = createBrowserRouter([
    { 
        path: "/",
        element: <Layout />,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/collections/:category",
                element:<Collections/>
            }
            ,
            {
                path:"/product/:id",
                element:<Product/>
            }
            ,
            {
                path:"/Login",
                element:<LoginPage/>
            }
            ,
            {
                path:"/cart",
                element:<CartPage/>
            }
            ,
            {
                path:"/about_site",
                element:<AboutPage/>
            }
        ]
    }
])