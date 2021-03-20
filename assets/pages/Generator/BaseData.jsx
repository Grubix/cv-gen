import React from 'react';
import TextInput from '@/components/TextInput/TextInput';
import styles from './Generator.scss?module';
import xd from './xd.jpg';

const BaseData = props => {
    const {
        firstname,
        lastname,
        birthDate,
        phoneNumber,
        email,
        street,
        zipCode,
        gdpr,
        github,
        onDataChange
    } = props;

    return (
        <div className={styles.data_group}>
            <div className={styles['cv-image']}>
                <img src={xd} className={styles['cv-image__image']}/>
                <input type="file" accept="image/*" className={styles['cv-image__select']} />
            </div>
            <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--1-3']} style={{ marginTop: 0 }}>
                <TextInput
                    placeholder="Firstname"
                    name="firstname"
                    value={firstname}
                    onChange={onDataChange}
                />
                <TextInput
                    placeholder="Lastname"
                    name="lastname"
                    value={lastname}
                    onChange={onDataChange}
                />
            </div>
            <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--1-3']}>
                <TextInput
                    placeholder="Birth date DD.MM.YYYY"
                    name="birthDate"
                    value={birthDate}
                    onChange={onDataChange}
                />
                <TextInput
                    placeholder="Phone number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={onDataChange}
                    maxLength="9"
                />
            </div>
            <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--2-3']}>
                <TextInput
                    placeholder="Email address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onDataChange}
                />
            </div>
            <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--1-3']}>
                <TextInput
                    placeholder="Street and house number"
                    name="street"
                    value={street}
                    onChange={onDataChange}
                />
                <TextInput
                    placeholder="Zip code and town"
                    name="zipCode"
                    value={zipCode}
                    onChange={onDataChange}
                />
            </div>
            <div className={styles.row + ' ' + styles['row--1']}>
                <TextInput
                    placeholder="GDPR clause"
                    name="gdpr"
                    value={gdpr}
                    onChange={onDataChange}
                    multiline
                    style={{ resize: 'vertical', maxHeight: '200px' }}
                />
            </div>
            <div className={styles.row + ' ' + styles['row--1']}>
                <TextInput
                    placeholder="Github"
                    name="github"
                    value={github}
                    onChange={onDataChange}
                />
            </div>
        </div>
    );
};

export default BaseData;