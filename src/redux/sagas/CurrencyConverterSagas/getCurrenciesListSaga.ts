import { put, takeLatest } from 'redux-saga/effects';
import * as currencyConverterConstants from '../../constants/currencyConverterConstants';
import { API_XE_CONVERTER } from '../api/API';
import * as apiEndpoint from '../api/endpoints/currencyConverter/currencyConverterConstants';

export function* fetchGetCurrenciesList() {
  try {
    const config = {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.REACT_APP_XE_ACCOUNT_ID}:${process.env.REACT_APP_XE_ACCOUNT_API_KEY}`,
        ).toString('base64')}`,
      },
    };
    const response = yield API_XE_CONVERTER.get(
      apiEndpoint.GET_CURRENCIES_LIST,
      config,
    );

    yield put({
      type: currencyConverterConstants.GET_CURRENCIES_LIST_SUCCESS,
      data: response.data.currencies,
    });
  } catch (err) {
    console.warn(err);
  }
}

export function* getCurrenciesListWatcher() {
  yield takeLatest(
    currencyConverterConstants.GET_CURRENCIES_LIST_REQUEST,
    fetchGetCurrenciesList,
  );
}

export default [getCurrenciesListWatcher()];
