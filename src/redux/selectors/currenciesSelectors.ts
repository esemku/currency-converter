import { createSelector } from 'reselect';

export const getCurrencies = (state) => state.currencies;

export const getCurrenciesList = createSelector(
  getCurrencies,
  (currenciesList) => currenciesList,
);

export const getConvertedAmount = createSelector(
  getCurrencies,
  (convertedAmount) => convertedAmount.convertedAmount,
);

export const getConvertedAmountFromCode = createSelector(
  getCurrencies,
  (convertedAmount) => convertedAmount.convertedFrom,
);

export const getConvertedAmountToCode = createSelector(
  getCurrencies,
  (convertedAmount) => convertedAmount.convertedTo,
);
