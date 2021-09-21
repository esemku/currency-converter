import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import useStyles from './styles';

interface IProps {
  inputName: string;
  label: string;
  onChange: any;
}

const AmountInput: React.FC<IProps> = ({ inputName, label, onChange }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <label htmlFor={inputName} className={styles.label}>
        {label}
      </label>
      <CurrencyInput
        id={inputName}
        name={inputName}
        placeholder="e.g.  1,000.00"
        decimalScale={2}
        onValueChange={onChange}
        decimalSeparator="."
        groupSeparator=","
        className={styles.input}
      />
    </div>
  );
};

export default AmountInput;
