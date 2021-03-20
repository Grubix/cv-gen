import React, { useEffect } from 'react';
import { ButtonLight, ButtonDark } from '@/components/Button/Button';
import styles from './Generator.scss?module';

const Education = () => {
    return (
        <div className={styles.data_group}>
            <div className={styles.header}>Education history</div>
            <div id="js-skills"></div>
            <div className={styles.row}>
                <ButtonLight>Add</ButtonLight>
            </div>
        </div>
    );
};

export default Education;