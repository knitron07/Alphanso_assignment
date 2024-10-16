import React, { useEffect, useRef, HtmlHTMLAttributes } from "react";

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  value?: string;
  placeHolder?: string;
} & HtmlHTMLAttributes<HTMLInputElement>;

function Input({
  inputRef,
  value,
  onKeyDown,
  onChange,
  placeHolder = "",
  ...rest
}: InputProps) {
  const localRef = useRef<HTMLInputElement>(null);
  const finalRef = inputRef || localRef;

  useEffect(() => {
    if (finalRef.current && value !== undefined) {
      finalRef.current.value = value;
    }
  }, [value]);

  return (
    <input
      ref={finalRef}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeHolder}
      {...rest}
    />
  );
}

export default Input;
