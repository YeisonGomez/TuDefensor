const jwtDecode = require('jwt-decode');

export class Token {

    decode = () => {
        try {
            return jwtDecode(localStorage.getItem('token'));
        } catch (e) {
            return undefined;
        }
    }

    isTokenValid = () => {
        try {
            return jwtDecode(localStorage.getItem('token')) !== undefined;
        } catch (e) {
            return false;
        }
    };

    getToken() {
        return localStorage.getItem('token');
    }

    getUser() {
        return jwtDecode(localStorage.getItem('token'))
    }

    async setToken(token) {
        return await localStorage.setItem('token', token);
    }

    destroyToken() {
        localStorage.removeItem('token');
    }
}

export default new Token();