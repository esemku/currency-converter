import { MenuItem, Select } from '@material-ui/core';
import { nanoid } from 'nanoid';
import React from 'react';
import CurrencyFlag from 'react-currency-flags';
import { ICurrencyListItem } from 'types/currencies';
import { IconChevronDown } from '../icons';
import useStyles from './styles';

interface IProps {
  currenciesList: ICurrencyListItem[];
  value: string;
  label: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
        MenuProps={{ className: styles.selectMenu }}
        data-testid={`selectCurrency${id}`}
      >
        {currenciesList.map((currencyItem: ICurrencyListItem) => (
          <MenuItem
            value={currencyItem.iso}
            key={nanoid()}
            className={styles.selectMenuItem}
          >
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
