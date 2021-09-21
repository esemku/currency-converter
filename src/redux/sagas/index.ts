import { all } from 'redux-saga/effects';
import CurrencyConverterSaga from './CurrencyConverterSagas/index';

export default function* rootSaga() {
  yield all([...CurrencyConverterSaga]);
}
