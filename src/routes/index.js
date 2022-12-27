import { useRoutes } from "react-router-dom"
import Error from "../pages/Error"
import LandingPage from "../pages/LandingPage"

export default function WebRouter() {
    let routes = useRoutes([
        { path: '/', element: <LandingPage /> },
        { path: '*', element: <Error /> },
    ])
    return routes
}
