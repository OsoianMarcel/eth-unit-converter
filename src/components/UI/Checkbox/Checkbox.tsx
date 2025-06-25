import { type FC, type KeyboardEvent, useState, useEffect, useId } from 'react';
import './checkbox.scss';

type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
};

const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  onChange = () => {},
  label = 'Checkbox'
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const labelId = useId();

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const toggleCheckbox = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  const handleClick = () => {
    toggleCheckbox();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent scroll on spacebar
      toggleCheckbox();
    }
  };

  return (
    <div
      className="checkbox"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="checkbox"
      aria-checked={isChecked}
      aria-labelledby={labelId}
    >
      <div className="checkbox__styled">
        <svg
          viewBox="0 0 24 24"
          className={`checkbox__icon checkbox__icon--${
            !isChecked ? 'hidden' : 'def'
          }`}
          aria-hidden={!isChecked}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <span className="checkbox__label" id={labelId}>
        {label}
      </span>
    </div>
  );
};

export default Checkbox;
