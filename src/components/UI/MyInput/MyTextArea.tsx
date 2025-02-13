import { useState, useEffect, useMemo, forwardRef, useCallback, HTMLAttributes } from 'react';
import classes from "./MyInput.module.css";
import { PiSealWarningFill } from 'react-icons/pi';

type TMyTextAreaProps = {
  value: string;
  placeholder?: string;
  addedClassName?: string;
  maxRows?: number;
  label: string;
  error?: string
} & HTMLAttributes<HTMLTextAreaElement>;

const MyTextArea = forwardRef<HTMLTextAreaElement, TMyTextAreaProps>(({
  value,
  addedClassName,
  maxRows = 5,
  label,
  error,
  ...props
}, externalRef) => {

  const [rows, setRows] = useState(2);
  const [internalRef, setInternalRef] = useState<HTMLTextAreaElement | null>(null);
  const textAreaId = useMemo(() => String(Date.now()), []);

  const refCallback = useCallback((element: HTMLTextAreaElement | null) => {
    setInternalRef(element);
    if (typeof externalRef === 'function') {
      externalRef(element);
    } else if (externalRef) {
      externalRef.current = element;
    }
  }, [externalRef]);

  const calculateRows = useCallback(() => {
    if (internalRef) {
      const lineHeight = parseInt(window.getComputedStyle(internalRef).lineHeight, 10);
      const currentRows = Math.floor(internalRef.scrollHeight / lineHeight);

      if (currentRows <= maxRows) {
        setRows(currentRows || 1);
      } else {
        setRows(maxRows);
      }
    }
  }, [internalRef, maxRows]);

  useEffect(() => {
    if (internalRef) {
      const resizeObserver = new ResizeObserver(() => {
        calculateRows();
      });

      resizeObserver.observe(internalRef);

      return () => resizeObserver.disconnect();
    }
  }, [internalRef, calculateRows]);

  useEffect(() => {
    calculateRows();
  }, [value, calculateRows]);

  return (
    <div className={classes["container"]}>
      <div className={classes["label-and-error-container"]}>
        <label htmlFor={textAreaId}>{label}</label>
        {error &&
          <span className={classes["error"]}>
            <PiSealWarningFill /> {error}
          </span>
        }
      </div>
      <textarea
        {...props}
        id={textAreaId}
        ref={refCallback}
        value={value}
        rows={rows}
        className={`${classes["input"]} ${classes["input--text-area"]} ${addedClassName}`}
        style={{ width: '100%', minHeight: '40px', lineHeight: '1.5' }}
      />
    </div>
  );
});

export default MyTextArea;