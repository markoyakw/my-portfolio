import { ChangeEventHandler, forwardRef, InputHTMLAttributes, useMemo } from 'react';
import classes from "./MyInput.module.css"
import { PiSealWarningFill } from 'react-icons/pi';
import { ChangeHandler } from 'react-hook-form';

type TMyInputInputProps = {
    addedClassName?: string;
    onChange?: ChangeHandler;
    addedOnChange?: ChangeHandler;
    label?: string
    error?: string
} & InputHTMLAttributes<HTMLInputElement>

const MyInput = forwardRef<HTMLInputElement, TMyInputInputProps>(({ label, addedClassName, error, onChange, addedOnChange, ...props }, ref) => {

    const className = `${classes["input"]} ${addedClassName}`
    const inputId = useMemo(() => String(Date.now()), [])

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange && onChange(e)
        addedOnChange && addedOnChange(e)
    }

    return (
        <div className={classes["container"]}>
            <div className={classes["label-and-error-container"]}>
                <label htmlFor={inputId}>
                    {label}
                </label>
                {error &&
                    <span className={classes["error"]}>
                        <PiSealWarningFill /> {error}
                    </span>
                }
            </div>
            <input
                ref={ref}
                {...props}
                id={inputId}
                className={className}
                onChange={handleInputChange}
            />
        </div>
    );
})

export default MyInput;
