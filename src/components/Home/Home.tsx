import { AmountInput, Button } from 'components/common';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getCurrenciesListRequest } from 'redux/actions/currencyConverterActions';
import { getCurrenciesList } from 'redux/selectors/currenciesSelectors';
import useStyles from './styles';

const Home: React.FC = () => {
  const styles = useStyles();
  const [amountInput, setAmountInput] = useState('');
  const dispatch = useDispatch();
  const { currenciesList } = useSelector(getCurrenciesList, shallowEqual);

  useEffect(() => {
    console.log('currenciesList: ', currenciesList);
  }, [currenciesList]);

  useEffect(() => {
    console.log('amountInput: ', amountInput);
  }, [amountInput]);

  useEffect(() => {
    dispatch(getCurrenciesListRequest());
  }, []);

  const convertCurrencies = () => {
    console.log('convertCurrencies');
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h3 className={styles.contentHeader}>Currency Converter</h3>
          <div className={styles.dashedLine} />
          {/* <div className={styles.converterWrapper}> */}
          <AmountInput
            inputName="amount"
            label="Amount"
            onChange={setAmountInput}
          />
          <Button name="Convert" onClick={convertCurrencies} disabled={false} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
