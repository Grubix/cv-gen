import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        refresh();
    }, []);

    const login = async ({ email, password }) => {
        return await axios.post('/api/login', { email, password })
            .then(response => {
                const { user, token, exp } = response.data;

                if (user && token && exp) {
                    setUser(user);

                    setTimeout(() => {
                        refresh(token);
                    }, (exp * 1000) - 1000);
                }

                return response;
            });
    };

    const register = async ({ email, password }) => {
        return await axios.post('/api/register', { email, password })
            .then(response => {

            });
    };

    const refresh = (token) => {
        const config = {
            headers: {
                'Authorization': `bearer ${token}`
            }
        };

        axios.post('api/refresh', null, config)
            .then(response => {
                const { user, token, exp } = response.data;

                if (!user || !token || !exp) {
                    return;
                }

                setUser(user);

                setTimeout(() => {
                    refresh(token);
                }, (exp * 1000) - 1000);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);