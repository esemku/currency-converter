import { put, takeLatest } from 'redux-saga/effects';
import * as currencyConverterConstants from '../../constants/currencyConverterConstants';
import { API_XE_CONVERTER } from '../api/API';
import * as apiEndpoint from '../api/endpoints/currencyConverter/currencyConverterConstants';

export function* fetchConvertFromCurrency({
  fromCurrency,
  toCurrency,
  amount,
}: ReturnType<any>) {
  try {
    const config = {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.REACT_APP_XE_ACCOUNT_ID}:${process.env.REACT_APP_XE_ACCOUNT_API_KEY}`,
        ).toString('base64')}`,
      },
    };
    const response = yield API_XE_CONVERTER.get(
      `${apiEndpoint.CONVERT_FROM_CURRENCY}from=${fromCurrency}&to=${toCurrency}&amount=${amount}`,
      config,
    );

    yield put({
      type: currencyConverterConstants.CONVERT_FROM_CURRENCY_SUCCESS,
      data: response.data.to[0].mid,
    });
  } catch (err) {
    console.warn(err);
  }
}

export function* convertFromCurrencyWatcher() {
  yield takeLatest(
    currencyConverterConstants.CONVERT_FROM_CURRENCY_REQUEST,
    fetchConvertFromCurrency,
  );
}

export default [convertFromCurrencyWatcher()];
