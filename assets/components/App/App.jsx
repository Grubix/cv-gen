import Generator from '@pages/Generator/Generator';
import React, { useState } from 'react';
import Auth from '../../Pages/Auth/Auth';
import './App.scss';

const App = () => {
    const [token, setToken] = useState();

    if (!token) {
        return <Auth setToken={setToken}/>;
    } else {
        return <Generator setToken={setToken}/>;
    }
};

export default App;