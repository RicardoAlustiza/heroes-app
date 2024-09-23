import { fireEvent, render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { NavBarComponent } from '../../src/components/NavBarComponent'
import { MemoryRouter, useNavigate } from 'react-router-dom'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('NavBarComponent', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 123,
            name: 'John Doe',
        },
        logout: jest.fn()
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('should render the name of the user', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <NavBarComponent />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('John Doe')).toBeTruthy()
    })

    test('should call logout and use history', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <NavBarComponent />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByText('Logout')
        fireEvent.click(logoutButton)

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true })
    })
})