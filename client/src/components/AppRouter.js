import {React} from 'react'
import {observer} from 'mobx-react-lite'
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { MAIN_PAGE_ROUTE } from '../utils/consts'
import MainPage from '../pages/MainPage'

// Component that will navigate through all pages
const AppRouter = observer(() => {
    const isAuth = true

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
            {publicRoutes.map(({path, Component}) =>    
                <Route key={path} path={path} element={<Component />}/>
            )}
            <Route path='*' element={<Navigate to={'/'} replace />} />
        </Routes>
    )
})

export default AppRouter