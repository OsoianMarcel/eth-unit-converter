import React, { useEffect, useId, useRef, useState } from 'react';
import BigNumber from 'bignumber.js';
import ClipboardJS from 'clipboard';

import './inputRow.scss';

import WarnIcon from '../../../assets/icons/warning-24px.svg?react';

type InputRowProps = {
  label: string;
  value: string;
  main?: boolean;
  warnNonInt?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const InputRow: React.FC<InputRowProps> = ({
  label,
  value,
  main = false,
  warnNonInt = false,
  placeholder = '0',
  onChange = () => {}
}) => {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const copyRef = useRef<HTMLButtonElement>(null);
  const copyTimeoutId = useRef<number | null>(null);
  const clipboard = useRef<ClipboardJS | null>(null);
  const inputId = useId();

  const isClipboardSupported = ClipboardJS.isSupported();
  const isEmpty = value.trim() === '';
  const valBn = BigNumber(value);

  // Setup clipboard
  useEffect(() => {
    if (isClipboardSupported && copyRef.current) {
      clipboard.current = new ClipboardJS(copyRef.current, {
        text: () => value
      });

      clipboard.current.on('success', () => {
        setCopied(true);
        if (copyTimeoutId.current) clearTimeout(copyTimeoutId.current);
        copyTimeoutId.current = setTimeout(() => setCopied(false), 500);
      });
    }

    return () => {
      if (clipboard.current) clipboard.current.destroy();
    };
  }, [value, isClipboardSupported]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const labelClickHandler = () => {
    inputRef.current?.select();
  };

  const handleCopyClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="input-row">
      <label
        className={`input-row__label input-row__label--${
          main ? 'main' : 'def'
        }`}
        htmlFor={inputId}
        onClick={labelClickHandler}
      >
        {label}
      </label>
      <input
        type="number"
        className={`input-row__input input-row__input--${
          valBn.lt(1) ? 'lt1' : 'def'
        }`}
        placeholder={placeholder}
        value={value}
        ref={inputRef}
        id={inputId}
        onChange={handleInputChange}
      />
      <div className="input-row__abs-box">
        <WarnIcon
          className="input-row__warn_icon"
          title="This unit must be an integer"
          style={{
            display:
              !isEmpty && !valBn.eq(0) && !valBn.isInteger() && warnNonInt
                ? 'block'
                : 'none'
          }}
        />
        <button
          className={`input-row__copy input-row__copy--${
            copied ? 'copied' : 'def'
          }`}
          disabled={isEmpty}
          style={{ display: isClipboardSupported ? 'block' : 'none' }}
          ref={copyRef}
          onClick={handleCopyClick}
        >
          {copied ? 'Done' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default InputRow;
