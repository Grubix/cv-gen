import { ButtonDark, ButtonLight } from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import { useAuth } from '@/utils/AuthProvider';
import axios from 'axios';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import styles from './Auth.scss?module';
import AuthContainer from './AuthContainer';

const Register = () => {
    const { user, login } = useAuth();
    const history = useHistory();

    if (user) {
        return <Redirect to='/' />;
    }

    const [fields, setFields] = useState({
        email: { value: '', error: '' },
        password: { value: '', error: '' },
        passwordConfirm: { value: '', error: '' }
    });

    const handleFieldChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        setFields(fields => {
            const error = fields[field].error;

            return Object.assign({}, fields, {
                [field]: { value, error }
            });
        });
    };

    const setError = (field, error) => {
        setFields(fields => {
            const value = fields[field].value;

            return Object.assign({}, fields, {
                [field]: { value, error }
            });
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        await axios.post('/api/login')
            .then(response => {
                history.push('/');
                login({
                    email: fields['email'],
                    password: fields['password']
                });
            });
    };

    return (
        <AuthContainer>
            <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <TextInput
                        name="email"
                        placeholder="Email"
                        value={fields['email'].value}
                        errorMessage={fields['email'].error}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className={styles.row}>
                    <TextInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={fields['password'].value}
                        errorMessage={fields['password'].error}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className={styles.row}>
                    <TextInput
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confirm password"
                        value={fields['passwordConfirm'].value}
                        errorMessage={fields['passwordConfirm'].error}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className={styles.rowSubmit}>
                    <ButtonLight onClick={() => history.push('/login')}>Log in</ButtonLight>
                    <ButtonDark type="submit">Sign up</ButtonDark>
                </div>
            </form>
        </AuthContainer>
    );
};

export default Register;