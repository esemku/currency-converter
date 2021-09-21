import * as currencyConverterConstants from '../constants/currencyConverterConstants';

export const getCurrenciesListRequest = () => ({
  type: currencyConverterConstants.GET_CURRENCIES_LIST_REQUEST,
});

export const getCurrenciesListSuccess = () => ({
  type: currencyConverterConstants.GET_CURRENCIES_LIST_SUCCESS,
});
