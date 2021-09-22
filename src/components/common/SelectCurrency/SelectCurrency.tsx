import { MenuItem, Select } from '@material-ui/core';
import { nanoid } from 'nanoid';
import React from 'react';
import CurrencyFlag from 'react-currency-flags';
import { IconChevronDown } from '../icons';
import useStyles from './styles';

interface IProps {
  currenciesList: any;
  value: string;
  label: string;
  id: string;
  onChange: any;
}

const SelectCurrency: React.FC<IProps> = ({
  currenciesList,
  value,
  label,
  onChange,
  id,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <Select
        id={id}
        value={value}
        onChange={onChange}
        IconComponent={IconChevronDown}
        className={styles.select}
      >
        {currenciesList.map((currencyItem) => (
          <MenuItem value={currencyItem.iso} key={nanoid()}>
            <CurrencyFlag
              currency={currencyItem.iso}
              size="sm"
              className={styles.currencyFlag}
            />
            {currencyItem.iso}
            <span className={styles.currencyName}>
              &nbsp;-&nbsp;{currencyItem.currency_name}
            </span>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectCurrency;
