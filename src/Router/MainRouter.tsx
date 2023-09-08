import {createBrowserRouter} from "react-router-dom"
import Layout from "../Lay/Layout"
import { Children } from "react"
import Homescreen from "../Home/Homescreen"

export const MainRouter = createBrowserRouter([
{
    path: "/",
    element: <Layout/>,
    children: [{
        index: true,
        element: <Homescreen/>
    }]
}
])