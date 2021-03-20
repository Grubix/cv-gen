import axios from 'axios';
import decode from 'jwt-decode';

class AuthService {

    async login(email, password) {
        const response = await axios
            .post('/api/login', {
                email,
                password
            });

        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.token));
        }
        
        return response.data;
    }

    async register(email, password) {
        const response = await axios
            .post('/api/register', {
                email,
                password
            });
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    getToken() {
        return localStorage.getItem('user');
    }

    getPayload() {
        const token = this.getToken();

        return token ? decode(token) : null;
    }

}

export default new AuthService();