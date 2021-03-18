import React, { useEffect } from 'react';
import { ButtonLight, ButtonDark } from '@components/Button/Button';
import styles from './Generator.scss?module';

const EmploymentHistory = () => {
    return (
        <div className={styles.data_group}>
            <div className={styles.header}>Employment history</div>
            <div id="js-skills"></div>
            <div className={styles.row}>
                <ButtonLight>Add</ButtonLight>
            </div>
        </div>
    );
};

export default EmploymentHistory;