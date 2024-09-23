import { Route, Routes } from "react-router-dom"

import { LogInPage } from '../auth'
import { HeroesRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRouter } from "./PublicRouter"

export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path="login" element={
            <PublicRouter>
              <LogInPage />
            </PublicRouter>
          } />

          <Route path ="/*" element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          } />
      </Routes>
    </>
  )
}
