import { type FC, useState, useEffect } from 'react';
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

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className="checkbox" onClick={handleClick}>
      <div className="checkbox__styled">
        <svg
          viewBox="0 0 24 24"
          className={`checkbox__icon checkbox__icon--${
            !isChecked ? 'hidden' : 'def'
          }`}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="checkbox__label">{label}</span>
    </div>
  );
};

export default Checkbox;
