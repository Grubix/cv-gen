import React from 'react';
import styles from './Auth.scss?module';

const AuthContainer = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
};

export default AuthContainer;