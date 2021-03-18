import React, { useState } from 'react';
import styles from './Auth.scss?module';
import TextField from '@components/TextInput/TextInput';
import {ButtonLight, ButtonDark} from '@components/Button/Button';

const Auth = ({ setToken }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async e => {
        e.preventDefault();
        setToken(true);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
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
            </div>
        </div>
    );
};

export default Auth;