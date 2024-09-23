import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"
import { render, screen } from '@testing-library/react'

describe('PublicRoute', () => {

    test('should render the children if the user is not logged', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <p>Public content</p>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Public content')).toBeTruthy()
    })

    test('should render the /marvel if the user is logged', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'John Doe',
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={'/marvel'}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <p>Public content</p>
                            </PublicRoute>
                        } />
                        <Route path="/marvel" element={<p>Private content</p>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.queryByText('Private content')).toBeTruthy()
    })
})