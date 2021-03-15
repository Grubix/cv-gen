import React, { useState } from 'react';
import styles from './TextInput.scss?module';

const TextInput = props => {
    const {
        id,
        value,
        placeholder,
        errorMessage,
        onChange,
        onFocus,
        onBlur,
        maxLength,
        spellcheck = false,
        multiline = false,
        ...inputProps
    } = props;

    const [focus, setFocus] = useState(false);
    const [valueChanged, setValueChanged] = useState(false);

    const handleOnChange = e => {
        if (e.target.value.length - 1 >= maxLength) {
            return;
        }

        setValueChanged(true);
        if (onChange) onChange(e);
    };

    const handleOnFocus = e => {
        setFocus(true);
        if (onFocus) onFocus(e);
    }

    const handleOnBlur = e => {
        setFocus(false);
        if (onBlur) onBlur(e);
    }

    const containerClassList = [styles.container];
    if (!valueChanged && errorMessage) containerClassList.push(styles.error);

    const labelClassList = [styles.placeholder];
    if (value || focus) labelClassList.push(styles.placeholderActive);
    if (focus) labelClassList.push(styles.placeholderFocus);

    let inputElement;

    if (multiline) {
        inputElement = <textarea
            id={id}
            type="text"
            value={value}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            spellCheck={spellcheck}
            {...inputProps}
        >
        </textarea>;
    } else {
        inputElement = <input
            id={id}
            type="text"
            value={value}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            spellCheck={spellcheck}
            {...inputProps}
        />
    }

    return (
        <div className={containerClassList.join(' ')}>
            <div className={styles.wrapper}>
                { inputElement }
                <label htmlFor={id} className={labelClassList.join(' ')}>
                    { placeholder }
                </label>
            </div>
            {!valueChanged && errorMessage &&
                (<div className={styles.errorLabel}>{errorMessage}</div>)}
        </div>
    );
};

export default TextInput;