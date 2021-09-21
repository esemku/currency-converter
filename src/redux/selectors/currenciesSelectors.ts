import { createSelector } from 'reselect';

export const getCurrencies = (state) => state.currencies;

export const getCurrenciesList = createSelector(
  getCurrencies,
  (currenciesList) => currenciesList,
);

export const getConvertedAmount = createSelector(
  getCurrencies,
  (convertedAmount) => convertedAmount,
);
