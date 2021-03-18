import { ButtonDark, ButtonLight } from '@components/Button/Button';
import React, { Fragment, useState } from 'react';
import BaseData from './BaseData';
import EducationHistory from './EducationHistory';
import EmploymentHistory from './EmploymentHistory';
import styles from './Generator.scss?module';
import Interests from './Interests';
import Skills from './Skills';

const Generator = ({ setToken }) => {
    const [baseDataFields, setBaseDataFields] = useState({
        firstname: 'Krystian',
        lastname: 'Borowicz',
        birthDate: '08.12.1998',
        phoneNumber: '696838220',
        email: 'krypi23@gmail.com',
        street: 'Nagietkowa 28',
        zipCode: '62-030 Luboń',
        gdpr: 'Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
        github: 'github.com/Grubix'
    });

    const handleBaseDataChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        setBaseDataFields(fields => ({...fields, [field]: value }));
    };

    return (
        <Fragment>
            <main className={styles.main}>
                <div className={styles.test1}></div>
                <div className={styles.test2}></div>
                <div className={styles.wrapper}>
                    <nav className={styles.main__topnav}>
                        <div className={styles.topnav__user}>
                            <span>{ baseDataFields['firstname'] + ' ' + baseDataFields['lastname'] }</span>
                        </div>
                        <div className={styles.topnav__buttons}>
                            <ButtonLight onClick={() => setToken(false)}>Log out</ButtonLight>
                            <ButtonLight>Save</ButtonLight>
                            <ButtonDark type="submit">Generate CV</ButtonDark>
                        </div>
                    </nav>
                    <BaseData {...baseDataFields} onDataChange={handleBaseDataChange}/>
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
                <b>CV Generator</b>
                &nbsp;by&nbsp;
                <a href="https://github.com/kborowicz" className={styles.link} target="_blank">kborowicz</a>
            </div>
        </Fragment>
    );
};

export default Generator;