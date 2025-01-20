import React, { useState, useRef, useEffect, HTMLAttributes, useMemo } from 'react';
import classes from "./MyInput.module.css"

type TMyTextAreaProps = {
  value: string;
  placeholder?: string;
  addedClassName?: string;
  maxRows?: number;
  label: string
} & HTMLAttributes<HTMLTextAreaElement>

const MyTextArea: React.FC<TMyTextAreaProps> = ({
  value,
  addedClassName,
  maxRows = 5,
  label,
  ...props
}) => {

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [rows, setRows] = useState(1);
  const textAreaId = useMemo(() => String(Date.now()), [])

  useEffect(() => {
    if (textAreaRef.current) {
      const lineHeight = parseInt(window.getComputedStyle(textAreaRef.current).lineHeight, 10);
      const currentRows = Math.floor(textAreaRef.current.scrollHeight / lineHeight);

      if (currentRows <= maxRows) {
        setRows(currentRows || 1);
      } else {
        setRows(maxRows);
      }
    }
  }, [value]);

  return (
    <div className={classes["container"]}>
      <label htmlFor={textAreaId}>{label}</label>
      <textarea
        {...props}
        ref={textAreaRef}
        value={value}
        rows={rows}
        className={`${classes["input"]} ${classes["input--text-area"]} ${addedClassName}`}
        style={{ width: '100%', minHeight: '40px', lineHeight: '1.5' }}
      />
    </div>
  );
};

export default MyTextArea;
