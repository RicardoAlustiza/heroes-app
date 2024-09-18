import { Route, Routes } from "react-router-dom"

import { LogInPage } from '../auth'
import { HeroesRoutes } from "../heroes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path="login" element={<LogInPage />} />
          <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}
