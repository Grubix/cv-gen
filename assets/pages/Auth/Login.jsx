import { ButtonDark, ButtonLight } from '@components/Button/Button';
import TextField from '@components/TextField/TextField';
import React, { useState } from 'react';
import styles from './Auth.scss?module';

const Login = ({ setToken }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async e => {
        e.preventDefault();
        setToken(true);
    };

    return (
        <form onSubmit={loginUser}>
            <div className={styles.row}>
                <TextField
                    placeholder="Login"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <TextField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.rowSubmit}>
                <ButtonLight>Sign up</ButtonLight>
                <ButtonDark>Log in</ButtonDark>
            </div>
        </form>
    );
};