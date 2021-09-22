import { AmountInput, Button, SelectCurrency } from 'components/common';
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
  const [amountInput, setAmountInput] = useState('');
  const [currency, setCurrency] = useState({
    from: 'PLN',
    to: 'GBP',
  });
  const dispatch = useDispatch();
  const { currenciesList } = useSelector(getCurrenciesList, shallowEqual);
  const { convertedAmount } = useSelector(getConvertedAmount, shallowEqual);

  useEffect(() => {
    console.log('convertedAmount: ', convertedAmount);
  }, [convertedAmount]);

  useEffect(() => {
    console.log('amountInput: ', amountInput);
  }, [amountInput]);

  useEffect(() => {
    dispatch(getCurrenciesListRequest());
  }, []);

  const convertCurrencies = () => {
    dispatch(
      convertFromCurrencyRequest({
        fromCurrency: 'USD',
        toCurrency: 'EUR',
        amount: 15000,
      }),
    );
  };

  console.log('currenciesList: ', currenciesList);

  useEffect(() => {
    console.log('currencyss: ', currency.from);
  }, [currency]);

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
          <SelectCurrency
            id="currencyTo"
            label="To"
            currenciesList={currenciesList}
            value={currency.to}
            onChange={handleCurrencyTo}
          />
          <Button name="Convert" onClick={convertCurrencies} disabled={false} />
        </div>
      </div>
    </div>
  );
};

export default Home;
