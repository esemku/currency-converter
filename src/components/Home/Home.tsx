import { AmountInput, Button, SelectCurrency } from 'components/common';
import { IconUpDownArrows } from 'components/common/icons';
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

  const handleCurrencyFrom = (e) => {
    setCurrency({
      ...currency,
      from: e.target.value,
    });
  };

  const handleCurrencyTo = (e) => {
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

  const getCurrencyName = (currencyCode) => {
    return currenciesList.filter(
      (currencyObject) => currencyObject.iso === currencyCode,
    );
  };

  const formatConvertedAmount = (amount) => {
    const arr = String(amount).split('.');
    return `${arr[0]}.${arr[1].substring(0, 2)}`;
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h3 className={styles.contentHeader}>Currency Converter</h3>
          <div className={styles.dashedLine} />
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
          <IconUpDownArrows onClick={exchangeCurrencySelectValues} />
          <SelectCurrency
            id="currencyTo"
            label="To"
            currenciesList={currenciesList}
            value={currency.to}
            onChange={handleCurrencyTo}
          />
          {Array.isArray(currenciesList) &&
            currenciesList.length > 0 &&
            convertedAmount && (
              <div>
                <span
                  className={styles.resultTextCurrencyToConvert}
                >{`${amountInput} ${
                  getCurrencyName(currency.from)[0].currency_name
                } =`}</span>
                <h2 className={styles.resultTextCurrencyConverted}>
                  {`${formatConvertedAmount(convertedAmount)} ${
                    getCurrencyName(currency.to)[0].currency_name
                  }`}
                </h2>
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
