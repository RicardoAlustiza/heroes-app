import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../src/router/AppRouter'

describe('AppRouter', () => {

    test('should render the login if the user is not logged', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getAllByText('LogIn').length).toBe(2)
    })

    test('should render the marvel component if the user is logged', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'Juan'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)      
    })
})