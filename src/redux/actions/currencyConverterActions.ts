import { ICurrency } from 'types/currencies';
import * as currencyConverterConstants from '../constants/currencyConverterConstants';

export const getCurrenciesListRequest = () => ({
  type: currencyConverterConstants.GET_CURRENCIES_LIST_REQUEST,
});

export const convertFromCurrencyRequest = ({
  fromCurrency,
  toCurrency,
  amount,
}: ICurrency) => ({
  type: currencyConverterConstants.CONVERT_FROM_CURRENCY_REQUEST,
  fromCurrency,
  toCurrency,
  amount,
});
