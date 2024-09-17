import { Route, Routes, Navigate } from "react-router-dom"
import { MarvelPage } from "../heroes/pages/MarvelPage"
import { DCPage } from "../heroes/pages/DCPage"
import { LogInPage } from "../auth/pages/LogInPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DCPage />} />

            <Route path="login" element={<LogInPage />} />

            <Route path="/" element={<Navigate to="/marvel" /> } />
        </Routes>
    </>
  )
}
