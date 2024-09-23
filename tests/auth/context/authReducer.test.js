import { authReducer, types } from '../../../src/auth';

describe('authReducer', () => {

    test('should return default state', () => {

        const state = authReducer({ logged: false }, {});

        expect(state).toEqual({ logged: false });
    });

    test('should authenticate and place the user name', () => {

        const action = {
            type: types.login,
            payload: {
                id: 123,
                name: 'User Name'
            }
        };

        const state = authReducer({logged: false}, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('should delete the user name and logged in false', () => {

        const state = {
            logged: true,
            user: {
                id: 123,
                name: 'User Name'
            }
        };

        const action = {
            type: types.logout
        };

        const newState = authReducer(state, action);

        expect(newState).toEqual({
            logged: false
        });
    })
});