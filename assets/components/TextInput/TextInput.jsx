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
        spellCheck = false,
        multiline = false,
        ...inputProps
    } = props;

    const [focus, setFocus] = useState(false);
    const [valueChanged, setValueChanged] = useState(false);

    const handleOnChange = e => {
        setValueChanged(true);
        if (onChange) onChange(e);
    };

    const handleOnFocus = e => {
        setFocus(true);
        if (onFocus) onFocus(e);
    };

    const handleOnBlur = e => {
        setFocus(false);
        if (onBlur) onBlur(e);
    };

    let containerClass = styles.container;
    if (multiline) containerClass += ' ' + styles.multiline;
    if (!valueChanged && errorMessage) containerClass += ' ' + styles.error;

    let labelClass = styles.placeholder;
    if (value || focus) labelClass += ' ' + styles.placeholderFocus;

    let inputElement;
    const elementProps = {
        id,
        value: value || '',
        spellCheck,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
        onChange: handleOnChange,
        ...inputProps
    };

    if (multiline) {
        inputElement = <textarea {...elementProps}></textarea>;
    } else {
        inputElement = <input {...elementProps} type={props.type || 'text'} />;
    }

    return (
        <div className={containerClass}>
            <div className={styles.wrapper}>
                {inputElement}
                <label htmlFor={id} className={labelClass}>
                    {placeholder}
                </label>
            </div>
            {!valueChanged && errorMessage &&
                (<div className={styles.errorLabel}>{errorMessage}</div>)}
        </div>
    );
};

export default TextInput;