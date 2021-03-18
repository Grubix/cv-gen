import axios from 'axios';

class AuthService {

    login(email, password) {
        return axios
            .post('/api/login', {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(email, password) {
        return axios
            .post('/api/register', {
                email,
                password
            });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

}

export default new AuthService();

export const getAuthHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
};