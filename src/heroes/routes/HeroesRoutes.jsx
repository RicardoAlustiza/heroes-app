import { Routes, Route, Navigate } from "react-router-dom"
import { NavBarComponent } from "../../ui"
import { MarvelPage, DCPage, SearchPage, HeroPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <NavBarComponent />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DCPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />

                <Route path="/*" element={<Navigate to="/marvel" /> } />
            </Routes>
        </div>
    </>
  )
}
