import React from "react";
import './Button.css'

export const Button = ({ name,className, onClick, disabled, icon }) => {
    return (
        <button
            className={`btn btn-primary ${className}`}
            type="button"
            disabled={disabled}
            onClick={onClick}>
            {icon} {name}
        </button>
    );
}