import { render, screen } from '@testing-library/react'
import { PrivateRoute } from '../../src/router/PrivateRoute'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'

describe('PrivateRoute', () => {

    test('should render the children if the user is logged', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'John Doe',
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <p>Private content</p>
                    </PrivateRoute>                    
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Private content')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledTimes("lastPath", "/search?q=batman")
    })
})