import aboutPage from "./pages/aboutPage"
import AdminPage from "./pages/AdminPage"
import infoPage from "./pages/infoPage"
import loginPage from "./pages/loginPage"
import MainPage from "./pages/MainPage"
import reportPage from "./pages/reportPage"
import chartsPage from "./pages/chartsPage"
import { ABOUT, ADMIN_ROUTE, CHARTS, INFO, LOGIN_PAGE, MAIN_PAGE_ROUTE, REPORT_A_FIRE, REGISTRATION, MAP, STATION_ROUTE, FIREFIGHTER_ROUTE, FIRE_ENGINE_ROUTE, FIRE_TEAM_ROUTE } from "./utils/consts"
import registrationPage from "./pages/registrationPage"
import MapPage from "./pages/mapPage"
import StationPage from "./pages/stationPage"
import FirefighterPage from "./pages/firefighterPage"
import FireEnginePage from "./pages/fireEnginePage"

// Routes that will be accessible by everyone
export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: LOGIN_PAGE,
        Component: loginPage
    },
    {
        path: ABOUT,
        Component: aboutPage
    },
    {
        path: CHARTS,
        Component: chartsPage
    },
    {
        path: INFO,
        Component: infoPage
    },
    {
        path: REPORT_A_FIRE,
        Component: reportPage
    },
    {
        path: REGISTRATION,
        Component: registrationPage
    },
    {
        path: MAP,
        Component: MapPage
    },
    {
        path: STATION_ROUTE + '/:id',
        Component: StationPage
    },
    {
        path: FIREFIGHTER_ROUTE + '/:id',
        Component: FirefighterPage
    },
    {
        path: FIRE_ENGINE_ROUTE + '/:id',
        Component: FireEnginePage
    }
]

// Routes that will be accessible only by authorized users (Admins)
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    }
]