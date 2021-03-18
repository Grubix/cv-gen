import React from 'react';
import styles from './Button.scss?module';

const Button = ({children, appearance, className, ...props}) => {
    let buttonClass = styles[appearance];
    if (className) buttonClass += ' ' + className;

    return (
        <button
            className={buttonClass}
            {...props}
        >
            { children }
        </button>
    );
};

export default Button;

export const ButtonLight = ({children, ...props}) => {
    return (
        <Button appearance='light' {...props}>
            { children }
        </Button>
    );
};

export const ButtonDark = ({children, ...props}) => {
    return (
        <Button appearance='dark' {...props}>
            { children }
        </Button>
    );
};
