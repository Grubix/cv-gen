import React, { useState } from 'react';
import styles from './Auth.scss?module';
import buttons from '@components/Button/Button.scss?module';
import TextField from '@components/TextInput/TextInput';

const Login = ({ setToken }) => {
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
                        <button type="button" className={buttons.buttonLight}>sign up</button>
                        <button type="submit" className={buttons.buttonDark}>log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;