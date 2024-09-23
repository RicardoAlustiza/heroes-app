import { types } from '../../../src/auth';

describe('types', () => {

    test('should have the following types', () => {

        expect(types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout'
        });
    });
});