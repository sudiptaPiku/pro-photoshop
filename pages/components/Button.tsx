import React from 'react';

export interface ButtonProps {
    text?: string;
    color?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    color,
    onClick,
}) => {
    return (
        <button
        style={{backgroundColor:color}}
        onClick={onClick}
        >
            {text}
        </button>
    )
}