import buttons from '@components/Button/Button.scss?module';
import React, { Fragment, useState } from 'react';
import BaseData from './BaseData';
import styles from './Generator.scss?module';

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
                <nav className={styles.main__topnav}>
                    <div className={styles.topnav__user}>
                        <span>{ baseDataFields['firstname'] + ' ' + baseDataFields['lastname'] }</span>
                    </div>
                    <div className={styles.topnav__buttons}>
                        <button type="button" className={buttons.buttonLight} onClick={() => setToken(false)}>log out</button>
                        <button type="button" className={buttons.buttonLight}>save</button>
                        <button type="submit" className={buttons.buttonDark}>generate CV</button>
                    </div>
                </nav>
                <BaseData {...baseDataFields} onDataChange={handleBaseDataChange}/>
                <div className={styles.data_group}>
                    <div className={styles.header}>Skills</div>
                    <div id="js-skills"></div>
                    <div className={styles.row}>
                        <button type="button" className={buttons.buttonLight}>add</button>
                    </div>
                </div>
                <div className={styles.data_group}>
                    <div className={styles.header}>Interests</div>
                    <div id="js-interests"></div>
                    <div className={styles.row}>
                        <button type="button" className={buttons.buttonLight}>add</button>
                    </div>
                </div>
                <div className={styles.data_group}>
                    <div className={styles.header}>Employment history</div>
                    <div id="js-employment-history"></div>
                    <div className={styles.row}>
                        <button type="button" className={buttons.buttonLight}>add</button>
                    </div>
                </div>
                <div className={styles.data_group}>
                    <div className={styles.header}>Education history</div>
                    <div id="js-education-history"></div>
                    <div className={styles.row}>
                        <button type="button" className={buttons.buttonLight}>add</button>
                    </div>
                </div>
                <div className="main__loading-overlay" id="js-loading-overlay">
                    <div className="loader"></div>
                </div>

            </main>
            <div className={styles.banner}>
                <b>CV Generator</b>&nbsp;by&nbsp;<a href="https://github.com/Grubix" className="link" target="_blank">kborowicz</a>
            </div>
        </Fragment>
    );
};

export default Generator;