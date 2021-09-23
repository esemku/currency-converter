import { AmountInput, Button, SelectCurrency } from 'components/common';
import { IconLeftRightArrows, IconUpDownArrows } from 'components/common/icons';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  convertFromCurrencyRequest,
  getCurrenciesListRequest,
} from 'redux/actions/currencyConverterActions';
import {
  getConvertedAmount,
  getCurrenciesList,
} from 'redux/selectors/currenciesSelectors';
import { ICurrencyListItem } from 'types/currencies';
import useStyles from './styles';

const Home: React.FC = () => {
  const styles = useStyles();
  const [amountInput, setAmountInput] = useState(null);
  const [currency, setCurrency] = useState({
    from: 'PLN',
    to: 'GBP',
  });
  const dispatch = useDispatch();
  const { currenciesList } = useSelector(getCurrenciesList, shallowEqual);
  const { convertedAmount } = useSelector(getConvertedAmount, shallowEqual);
  const { convertedFrom } = useSelector(getConvertedAmount, shallowEqual);
  const { convertedTo } = useSelector(getConvertedAmount, shallowEqual);

  useEffect(() => {
    dispatch(getCurrenciesListRequest());
  }, []);

  const convertCurrencies = () => {
    dispatch(
      convertFromCurrencyRequest({
        fromCurrency: currency.from,
        toCurrency: currency.to,
        amount: Number(amountInput),
      }),
    );
  };

  const handleCurrencyFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency({
      ...currency,
      from: e.target.value,
    });
  };

  const handleCurrencyTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency({
      ...currency,
      to: e.target.value,
    });
  };

  const exchangeCurrencySelectValues = () => {
    setCurrency({
      from: currency.to,
      to: currency.from,
    });
  };

  const getCurrencyName = (currencyCode: string) => {
    return currenciesList.filter(
      (currencyObject: ICurrencyListItem) =>
        currencyObject.iso === currencyCode,
    );
  };

  const formatConvertedAmount = (amount: number) => {
    const arr = String(amount).split('.');

    return (
      <h2 className={styles.convertedAmount}>
        {`${arr[0]}.${arr[1].substring(0, 2)}`}
        <span className={styles.convertedAmountGloom}>
          {arr[1].substring(2, 4)}&nbsp;
        </span>
        {getCurrencyName(convertedTo)[0].currency_name}
      </h2>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h3 className={styles.contentHeader}>Currency Converter</h3>
        <div className={styles.dashedLine} />
        <div className={styles.inputsWrapper}>
          <AmountInput
            inputName="amount"
            label="Amount"
            onChange={setAmountInput}
          />
          <SelectCurrency
            id="currencyFrom"
            label="From"
            currenciesList={currenciesList}
            value={currency.from}
            onChange={handleCurrencyFrom}
          />
          <IconUpDownArrows
            onClick={exchangeCurrencySelectValues}
            className={styles.iconUpDownArrows}
          />
          <IconLeftRightArrows
            onClick={exchangeCurrencySelectValues}
            className={styles.iconLeftRightArrows}
          />
          <SelectCurrency
            id="currencyTo"
            label="To"
            currenciesList={currenciesList}
            value={currency.to}
            onChange={handleCurrencyTo}
          />
        </div>
        <div className={styles.converterResultWrapper}>
          {Array.isArray(currenciesList) &&
            currenciesList.length > 0 &&
            convertedAmount && (
              <div data-testid="convertedAmountWrapper">
                <span
                  className={styles.resultTextCurrencyToConvert}
                >{`${amountInput} ${
                  getCurrencyName(convertedFrom)[0].currency_name
                } =`}</span>
                {formatConvertedAmount(convertedAmount)}
              </div>
            )}
          <Button
            name="Convert"
            onClick={convertCurrencies}
            disabled={!amountInput}
            className={styles.convertButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
