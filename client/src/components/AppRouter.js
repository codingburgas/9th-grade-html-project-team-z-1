import {React, useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { Context } from '../index'

// Component that will navigate through all pages
const AppRouter = observer(() => {
    const { user } = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
            {publicRoutes.map(({path, Component}) =>    
                <Route key={path} path={path} element={<Component />}/>
            )}

            /* Last route redirects user to main page when any other route didn't work */
            <Route path='*' element={<Navigate to={'/'} replace />} />
        </Routes>
    )
})

export default AppRouter