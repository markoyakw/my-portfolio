import { FC, HTMLAttributes, useMemo } from 'react';
import classes from "./MyInput.module.css"

type TMyInputInputProps = {
    addedClassName?: string;
    label?: string
} & HTMLAttributes<HTMLInputElement>

const MyInput: FC<TMyInputInputProps> = ({ label, addedClassName, ...props }) => {

    const className = `${classes["input"]} ${addedClassName}`
    const inputId = useMemo(() => String(Date.now()), [])

    return (
        <div className={classes["container"]}>
            <label htmlFor={inputId}>{label}</label>
            <input
                {...props}
                id={inputId}
                className={className}
            />
        </div>
    );
};

export default MyInput;
