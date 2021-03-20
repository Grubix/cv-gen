import { ButtonDark, ButtonLight } from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import authService from '@/utils/AuthService';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './Auth.scss?module';
import AuthContainer from './AuthContainer';

const Login = () => {
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async e => {
        e.preventDefault();
        const response = await authService.login({ login, password });
    };

    return (
        <AuthContainer>
            <form onSubmit={loginUser}>
                <div className={styles.row}>
                    <TextInput
                        placeholder="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                </div>
                <div className={styles.row}>
                    <TextInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles.rowSubmit}>
                    <ButtonLight onClick={() => history.push('/register')}>Sign up</ButtonLight>
                    <ButtonDark onClick={loginUser}>Log in</ButtonDark>
                </div>
            </form>
        </AuthContainer>
    );
};

export default Login;