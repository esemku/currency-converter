import React from 'react';
import useStyles from './styles';

interface IProps {
  name: string;
  disabled: boolean;
  onClick: any;
}

const Button: React.FC<IProps> = ({ name, disabled, onClick }) => {
  const styles = useStyles();

  /* eslint-disable react/button-has-type */
  return (
    <button
      type="button"
      className={styles.root}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
