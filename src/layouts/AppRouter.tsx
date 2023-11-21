import React from 'react'
import { Route, Routes } from 'react-router-dom'
import contents from 'routes/contentRoutes'
import { ArrayType } from '../shared/helpers/helpers'

const AppRouter = () => {
    const isAuth = true
    if (!isAuth) return null // Render nothing if the user is not authenticated
    const { publicPages } = contents

    const renderRoutes = (pages: ArrayType) => {
        return pages.map(RouteElem => (
            <React.Fragment key={RouteElem.id}>
                <Route path={RouteElem.path} element={<RouteElem.element />} />
                {RouteElem.children && renderRoutes(RouteElem.children)}
            </React.Fragment>
        ))
    }

    return (
        <Routes>
            {publicPages && renderRoutes(publicPages)}
        </Routes>
    )
}
export default AppRouter