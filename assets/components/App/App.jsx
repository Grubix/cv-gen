import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import Gen from '@/pages/Generator/Gen';
import AuthProvider from '@/utils/AuthProvider';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/" component={Gen} />
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;