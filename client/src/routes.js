import AdminPage from "./pages/AdminPage"
import MainPage from "./pages/MainPage"
import { ADMIN_ROUTE, MAIN_PAGE_ROUTE } from "./utils/consts"

// Routes that will be accessible by everyone
export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    }
]

// Routes that will be accessible only by authorized users (Admins)
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    }
]