import { ButtonDark, ButtonLight } from '@/components/Button/Button';
import React, { Fragment, useState, useEffect } from 'react';
import BaseData from './BaseData';
import EducationHistory from './Education';
import EmploymentHistory from './Employment';
import styles from './Generator.scss?module';
import Interests from './Interests';
import Skills from './Skills';
import authService from '@/utils/AuthService';
import { Redirect, useHistory } from 'react-router';
import { useAuth } from '@/utils/AuthProvider';

const Gen = () => {
    const history = useHistory();
    const { user, logout } = useAuth();
    const [baseDataFields, setBaseDataFields] = useState({});

    useEffect(() => {
        if (user) {
            setBaseDataFields(user.baseData);
        }
    }, [user]);

    if (!user) {
        return <Redirect to="/login" />;
    }

    const handleBaseDataChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        setBaseDataFields(fields => ({ ...fields, [field]: value }));
    };

    return (
        <Fragment>
            <main className={styles.main}>
                <div className={styles.test1}></div>
                <div className={styles.test2}></div>
                <div className={styles.wrapper}>
                    <nav className={styles.main__topnav}>
                        <div className={styles.topnav__user}>
                            <span>{baseDataFields['firstname'] + ' ' + baseDataFields['lastname']}</span>
                        </div>
                        <div className={styles.topnav__buttons}>
                            <ButtonLight onClick={() => { logout(); history.push('/login'); }}>Log out</ButtonLight>
                            <ButtonLight>Save</ButtonLight>
                            <ButtonDark type="submit">Generate CV</ButtonDark>
                        </div>
                    </nav>
                    <BaseData {...baseDataFields} onDataChange={handleBaseDataChange} />
                    <Skills></Skills>
                    <Interests></Interests>
                    <EmploymentHistory></EmploymentHistory>
                    <EducationHistory></EducationHistory>
                </div>
                <div className="main__loading-overlay">
                    <div className="loader"></div>
                </div>
            </main>
            <div className={styles.banner}>
                <b>CVgen</b>
                &nbsp;by&nbsp;
                <a href="https://github.com/kborowicz" className={styles.link} target="_blank">kborowicz</a>
            </div>
        </Fragment>
    );
};

export default Gen;