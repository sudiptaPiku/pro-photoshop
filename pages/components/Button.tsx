import React from 'react';

export interface ButtonProps {
    text?: string;
    color?: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    color,
    onClick,
    className,
}) => {
    return (
        <button
        style={{backgroundColor:color}}
        onClick={onClick}
        className={className}
        >
            {text}
        </button>
    )
}

export default Button;