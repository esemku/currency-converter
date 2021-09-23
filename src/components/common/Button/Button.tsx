import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

interface IProps {
  name: string;
  disabled: boolean;
  onClick: () => void;
  className: string;
}

const Button: React.FC<IProps> = ({ name, disabled, onClick, className }) => {
  const styles = useStyles();

  /* eslint-disable react/button-has-type */
  return (
    <button
      type="button"
      className={clsx(styles.root, className)}
      disabled={disabled}
      onClick={onClick}
      data-testid="convertButton"
    >
      {name}
    </button>
  );
};

export default Button;
